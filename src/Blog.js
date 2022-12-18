import { React, useState } from "react";
import "./styles.css";

function Blog(props) {
  return (
    <div>
      <div className="posts-container">
        {props.newData.map((post, index) => {
          return (
            <div key={index} className="post-container">
              <h2 className="heading">{post.title}</h2>
              <p>{post.body}</p>
              <div className="info">
                <h5>Posted by: {post.author}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
