import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa"; // Importing icons

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <h1>
        <FaShoppingCart className="header-icon" /> E-Commerce
      </h1>
      <nav>
        <Link to="/">
          <FaHome className="nav-icon" /> Home
        </Link>
        <Link to="/cart">
          <FaShoppingCart className="nav-icon" /> Cart <span>({cartCount})</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
