import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../api";
import './ProductDetails.css'; // Import the CSS for styling

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetails(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <div className="product-image-container">
        <img src={product.thumbnail} alt={product.title} className="full-size-image" />
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <div className="product-price-rating">
          <p className="product-price">
            <strong>Price:</strong> ₹{product.price}
          </p>
          <p className="product-rating">
            <strong>Rating:</strong> {product.rating} / 5
          </p>
        </div>
        <p className="product-category">
          <strong>Category:</strong> {product.category}
        </p>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
