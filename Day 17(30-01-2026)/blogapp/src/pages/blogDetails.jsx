import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams(); 

  return (
    <div>
      <h1>Blog Details</h1>
      <p>You are viewing blog post with ID: {id}</p>
      <p>This page can fetch and display details of blog post {id} from API or local data.</p>
    </div>
  );
};

export default BlogDetails;
