// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <h1>E-Commerce App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart <span>({cartCount})</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
