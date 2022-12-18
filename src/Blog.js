import { React, useState } from "react";
import "./styles.css";

function Blog(props) {
  return (
    <div>
      <ul className="posts-container">
        {props.newData.map((post, index) => {
          return (
            <li key={index} className="post-container">
              <h2 className="heading">{post.title}</h2>
              <p>{post.body}</p>
              <div className="info">
                <h5>Posted by: {post.author}</h5>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Blog;
