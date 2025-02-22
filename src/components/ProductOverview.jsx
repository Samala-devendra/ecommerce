
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import products from './products.json'; 

const ProductOverview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { prodOverView } = location.state; 
  
  
  const product = products.find((item) => item.Product_id === prodOverView);
  
  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleBuyNow = () => {
    navigate('/payment', { state: { product } }); 
  };

  const handleAddToCart = () => {
    alert(`${product.Name} added to cart!`); 
  };

  return (
    <div className="product-overviewe">
      <div className="product-images-container">
        <img src={product.Image} alt={product.Name} className="product-image" />
      </div>

      <div className="product-detailss">
        <h1>{product.Name}</h1>
        <p>Price: ₹{product.Price}</p>
        <p>Category: {product.Category}</p>
        <p>Seller: {product.Seller}</p>
        <p>Description: {product.Description}</p>
        <p>Available Sizes: {product.Sizes.join(", ")}</p>
        <p>Stock: {product.Stock}</p>

        <div className="product-buttons">
          <button className="button" onClick={handleAddToCart}>Add to Cart</button>
          <button className="button" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;



