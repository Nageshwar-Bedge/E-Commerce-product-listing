import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api";
import ProductCard from "../components/ProductCard";

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  useEffect(() => {
    // Show "Return to Top" button when scrolled down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      category ? product.category.toLowerCase() === category.toLowerCase() : true
    )
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating-desc") return b.rating - a.rating;
      return 0;
    });

  const categories = [
    "fragrances",
    "furniture",
    "groceries",
    "beauty",
    "electronics",
    "clothing",
    "appliances",
    "accessories",
  ];

  return (
    <div>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <select onChange={(e) => setCategory(e.target.value)} className="category-dropdown">
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
        <select onChange={(e) => setSort(e.target.value)} className="sort-dropdown">
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Rating: High to Low</option>
        </select>
      </div>
      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        )}
      </div>
      {showScrollTop && (
  <button className="scroll-to-top" onClick={scrollToTop}>
    <span className="scroll-to-top-icon">↑</span>
  </button>
)}

    </div>
  );
};

export default Home;
