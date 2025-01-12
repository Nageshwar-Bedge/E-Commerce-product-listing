import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Header = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <h1>
        <FaShoppingCart className="header-icon" /> E-Commerce
      </h1>
      {/* Menu toggle button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {/* Navigation links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <FaHome className="nav-icon" /> Home
        </Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>
          <FaShoppingCart className="nav-icon" /> Cart <span>({cartCount})</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
