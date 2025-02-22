import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product, removeProduct }) => {
  const [isLiked, setIsLiked] = useState(false); 
  const navigate = useNavigate();

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handlePaymentClick = () => {
    navigate('/payment', { state: { product } });
  };

  const handleRemoveProduct = () => {
    removeProduct(product);
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
    
      <button onClick={handleRemoveProduct} style={{ marginTop: '10px', backgroundColor: 'black', color: 'white' }}>
        REMOVE WISHLIST
      </button>
    </div>
  );
};

export default Product;
