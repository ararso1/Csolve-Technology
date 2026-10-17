import BlogSidebar from "@/components/BlogSidebar";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts, getPostBySlug } from "@/data/blog";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = () =>
  blogPosts.map((post) => ({ slug: post.slug }));

const page = ({ params }) => {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <NextLayout>
      <Breadcrumb pageName="Blog Details" pageTitle={post.title} />
      <section className="blog-details-section fix section-padding">
        <div className="container">
          <div className="row g-4 g-xl-5">
            <div className="col-lg-8">
              <article className="blog-details-card">
                <div className="blog-details-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-card-category">{post.categoryLabel}</span>
                </div>
                <div className="blog-details-body">
                  <div className="blog-card-meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      {post.date}
                    </span>
                    <span className="blog-card-meta-accent">{post.author}</span>
                  </div>
                  <h1>{post.title}</h1>
                  {post.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  <blockquote className="blog-details-quote">
                    {post.quote}
                  </blockquote>

                  <h3>Key Takeaways</h3>
                  <ul className="blog-details-list">
                    {post.highlights.map((item) => (
                      <li key={item}>
                        <i className="fas fa-check" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="blog-details-footer">
                    <div className="blog-tagcloud">
                      <Link href="/news">{post.categoryLabel}</Link>
                      <Link href="/news">Csolve Technology</Link>
                      <Link href="/news">East Africa</Link>
                    </div>
                    <Link href="/news" className="theme-btn">
                      Back To Blog
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default page;
