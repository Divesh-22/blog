import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <div className="container">
      <div className="header">
        <ul className="navbar_ul">
          <li className="navbar_li">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar_li">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar_li">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
