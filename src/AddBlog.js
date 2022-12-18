import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Blog from "./Blog.js";
import data from "./Data.js";

function AddBlog(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const addItemToList = () => {
    if (title !== "" && body !== "" && author !== "") {
      let item = { title, body, author };
      data.push(item);
      setTitle("");
      setBody("");
      setAuthor("");
    }
  };

  return (
    <div className="container">
      <div className="addpost-container">
        <label>Title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Content: </label>
        <textarea
          type="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <label>Name: </label>
        <input
          type="text"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <button onClick={addItemToList}>Add</button>
      </div>
      <Blog newData={data.slice().reverse()} />
    </div>
  );
}

export default AddBlog;
