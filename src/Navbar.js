import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <header className="header">
      <div className="header_content">
        <nav>
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
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
