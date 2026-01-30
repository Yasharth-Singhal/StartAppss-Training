import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h2>Blog App</h2>
        </Link>
      </div>
      <div className="navlink">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
