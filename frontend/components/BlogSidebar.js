import {
  blogCategories,
  blogTags,
  getRecentPosts,
} from "@/data/blog";
import Link from "next/link";

const BlogSidebar = () => {
  const recentPosts = getRecentPosts(3);

  return (
    <aside className="main-sidebar blog-sidebar">
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h3>Recent Insights</h3>
        </div>
        <div className="popular-posts">
          {recentPosts.map((post) => (
            <div className="single-post-item" key={post.slug}>
              <Link href={`/news/${post.slug}`} className="thumb">
                <img src={post.thumb || post.image} alt={post.title} />
              </Link>
              <div className="post-content">
                <h5>
                  <Link href={`/news/${post.slug}`}>{post.title}</Link>
                </h5>
                <div className="post-date">
                  <i className="far fa-calendar-alt" />
                  {post.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h3>Categories</h3>
        </div>
        <div className="widget_categories">
          <ul>
            {blogCategories.map((category) => (
              <li key={category.id}>
                <Link href="/news">
                  {category.label} <span>{category.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="single-sidebar-widget blog-sidebar-cta">
        <span className="blog-sidebar-cta-label">Partner With Us</span>
        <h3>Ready to build more than systems?</h3>
        <p>
          Let’s discuss software, AI, ERP, and digital solutions that create
          lasting impact.
        </p>
        <Link href="/contact" className="theme-btn">
          Contact Csolve
          <i className="far fa-arrow-right" />
        </Link>
      </div>

      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h3>Popular Tags</h3>
        </div>
        <div className="tagcloud blog-tagcloud">
          {blogTags.map((tag) => (
            <Link href="/news" key={tag}>
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
