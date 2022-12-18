import React from "react";
import "./styles.css";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
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
      </div>
    </div>
  );
}

export default Footer;
