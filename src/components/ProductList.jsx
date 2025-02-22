

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from './products.json'; 

const Product = ({ product, removeProduct }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false); 
  const navigate = useNavigate();

  const handleLikeClick = (e) => {
    e.stopPropagation();  
    setIsLiked(!isLiked);
  };

  const handlePaymentClick = (e) => {
    e.stopPropagation();  
    navigate('/payment', { state: { product } });
  };

  const handleRemoveProduct = (e) => {
    e.stopPropagation();  
    removeProduct(product);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleProductClick = () => {
    navigate('/product', { state: { prodOverView: product.Product_id } }); 
  };

  return (
    <div className="product-card" onClick={handleProductClick}>
      <img src={product.Image} alt={product.Name} className="product-image" />
      <h3>{product.Name}</h3>
      <p>Price: ₹{product.Price}</p>
      <p>Category: {product.Category}</p>
      <p>Seller: {product.Seller}</p>

      {showDetails && (
        <div className="product-details">
          <p>{product.Description}</p>
          <p>Available Sizes: {product.Sizes.join(", ")}</p>
          <p>Stock: {product.Stock}</p>
        </div>
      )}

      <span
        onClick={handleLikeClick}
        style={{
          cursor: 'pointer',
          fontSize: '24px',
          color: isLiked ? 'grey' : 'grey',
        }}
      >
        ♥
      </span>

      <button onClick={handlePaymentClick} style={{ marginTop: '10px' }}>
        GO TO CART
      </button>
    
      <button 
        onClick={handleRemoveProduct} 
        style={{ marginTop: '10px', backgroundColor: 'black', color: 'white' }}
      >
        REMOVE WISHLIST
      </button>
    </div>
  );
};

const ProductList = () => {
  const [productList, setProductList] = useState(products); 

  const removeProduct = (product) => {
    const updatedProductList = productList.filter(item => item.Product_id !== product.Product_id); 
    setProductList(updatedProductList);
  };

  return (
    <div className="product-list">
      {productList.map((product, index) => (
        <Product
          key={index}
          product={product}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;








