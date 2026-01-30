import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Underg useState" },
    { id: 3, title: "React Rostandinuter Tutorial" }
  ];

  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.title}`}>{post.title}</Link> {/* Dynamic route link */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
