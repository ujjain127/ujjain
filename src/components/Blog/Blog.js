import React from 'react';
import { motion } from 'framer-motion';
import './Blog.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Design Better User Interfaces",
      excerpt: "Learn the key principles of effective UI design and how to implement them in your projects.",
      image: "/blog1.jpg",
      date: "Mar 15, 2024",
      category: "Design",
      readTime: "5 min read"
    },
    // Add more blog posts
  ];

  return (
    <section className="blog" id="blog">
      <div className="blog-container">
        <div className="section-header">
          <span className="section-subtitle">Blog</span>
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-description">
            Insights and tutorials about web development, design, and technology.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="blog-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <motion.a
                  href={`/blog/${post.id}`}
                  className="read-more"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                  </svg>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog; 