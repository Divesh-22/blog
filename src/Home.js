import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2>This is Homepage</h2>
      <footer className="footer">
        <p className="footer-by">
          A project by{" "}
          <a
            href="https://github.com/Divesh-22"
            rel="noopener"
            className="small-link"
          >
            Divesh Malhotra
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
