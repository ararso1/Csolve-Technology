import BlogSidebar from "@/components/BlogSidebar";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts } from "@/data/blog";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Blog" pageTitle="Insights From Csolve Technology" />
      <section className="blog-page-section fix section-padding">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              News &amp; Insights
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Ideas, Delivery Stories &amp; Digital Perspective
            </h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
              Explore practical thinking on software, AI, ERP, cybersecurity,
              and community impact from the Csolve Technology team.
            </p>
          </div>

          <div className="row g-4 g-xl-5">
            <div className="col-lg-8">
              <div className="row g-4">
                {blogPosts.map((post, index) => (
                  <div
                    key={post.slug}
                    className="col-md-6 wow fadeInUp"
                    data-wow-delay={`${0.15 + (index % 4) * 0.08}s`}
                  >
                    <article className="blog-card">
                      <Link
                        href={`/news/${post.slug}`}
                        className="blog-card-image"
                      >
                        <img src={post.image} alt={post.title} />
                        <span className="blog-card-category">
                          {post.categoryLabel}
                        </span>
                      </Link>
                      <div className="blog-card-body">
                        <div className="blog-card-meta">
                          <span>
                            <i className="far fa-calendar-alt" />
                            {post.date}
                          </span>
                          <span className="blog-card-meta-accent">
                            {post.author}
                          </span>
                        </div>
                        <h3>
                          <Link href={`/news/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p>{post.excerpt}</p>
                        <Link href={`/news/${post.slug}`} className="link-btn">
                          Read More
                          <i className="far fa-arrow-right" />
                        </Link>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
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
