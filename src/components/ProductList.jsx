

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import products from './products.json'; 
// // import ProductList from'./Productlist.css';

// const Product = ({ product, removeProduct }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [showDetails, setShowDetails] = useState(false); 
//   const navigate = useNavigate();

//   const handleLikeClick = (e) => {
//     e.stopPropagation();  
//     setIsLiked(!isLiked);
//   };

//   const handlePaymentClick = (e) => {
//     e.stopPropagation();  
//     navigate('/payment', { state: { product } });
//   };

//   const handleRemoveProduct = (e) => {
//     e.stopPropagation();  
//     removeProduct(product);
//   };

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   const handleProductClick = () => {
//     navigate('/product', { state: { prodOverView: product.Product_id } }); 
//   };

//   return (
//     <div className="product-card" onClick={handleProductClick}>
//       <img src={product.Image} alt={product.Name} className="product-image" />
//       <h3>{product.Name}</h3>
//       <p>Price: ₹{product.Price}</p>
//       <p>Category: {product.Category}</p>
//       <p>Seller: {product.Seller}</p>

//       {showDetails && (
//         <div className="product-details">
//           <p>{product.Description}</p>
//           <p>Available Sizes: {product.Sizes.join(", ")}</p>
//           <p>Stock: {product.Stock}</p>
//         </div>
//       )}

//       <span
//         onClick={handleLikeClick}
//         style={{
//           cursor: 'pointer',
//           fontSize: '24px',
//           color: isLiked ? 'grey' : 'grey',
//         }}
//       >
//         ♥
//       </span>

//       <button onClick={handlePaymentClick} style={{ marginTop: '10px' }}>
//         GO TO CART
//       </button>
    
//       <button 
//         onClick={handleRemoveProduct} 
//         style={{ marginTop: '10px', backgroundColor: 'black', color: 'white' }}
//       >
//         REMOVE WISHLIST
//       </button>
//     </div>
//   );
// };

// const ProductList = () => {
//   const [productList, setProductList] = useState(products); 

//   const removeProduct = (product) => {
//     const updatedProductList = productList.filter(item => item.Product_id !== product.Product_id); 
//     setProductList(updatedProductList);
//   };

//   return (
//     <div className="product-list">
//       {productList.map((product, index) => (
//         <Product
//           key={index}
//           product={product}
//           removeProduct={removeProduct}
//         />
//       ))}
//     </div>
//   );
// };

// export default ProductList;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import products from './products.json';
// import '../styles/productlist.css';

// const Product = ({ product, removeProduct }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [showDetails, setShowDetails] = useState(false); 
//   const navigate = useNavigate();

//   const handleLikeClick = (e) => {
//     e.stopPropagation();  
//     setIsLiked(!isLiked);
//   };

//   const handlePaymentClick = (e) => {
//     e.stopPropagation();  
//     navigate('/payment', { state: { product } });
//   };

//   const handleRemoveProduct = (e) => {
//     e.stopPropagation();  
//     removeProduct(product);
//   };

//   const toggleDetails = (e) => {
//     e.preventDefault(); // Prevents page reload
//     setShowDetails(!showDetails); // Toggles the showDetails state
//   };

//   const handleProductClick = () => {
//     navigate('/product', { state: { prodOverView: product.Product_id } }); 
//   };

//   return (
//     <div className="product-card" onClick={handleProductClick}>
//       <img src={product.Image} alt={product.Name} className="product-image" />
//       <h3>{product.Name}</h3>
//       <p>Price: ₹{product.Price}</p>
//       <p>Category: {product.Category}</p>
      
//       {/* Anchor tag for "View More" functionality */}
//       <a 
//         href="#"
//         onClick={toggleDetails} 
//         className="view-more-link"
//       >
//         {showDetails ? 'View less' : 'View more'}
//       </a>

  
//       {showDetails && (
//         <div className="product-details">
//           <p>Available Sizes: {product.Sizes.join(", ")}</p>
//           <p>Stock: {product.Stock}</p>
//         </div>
//       )}

//       <span
//         onClick={handleLikeClick}
//         style={{
//           cursor: 'pointer',
//           fontSize: '24px',
//           color: isLiked ? 'grey' : 'grey',
//         }}
//       >
//         ♥
//       </span>
//     <div>
//       <button onClick={handlePaymentClick} style={{ marginTop: '5px' }}>
//         GO TO CART
//       </button>
//     </div>
//       <button 
//         onClick={handleRemoveProduct} 
//         style={{ marginTop: '10px', backgroundColor: 'black', color: 'white',  }}
//       >
//         REMOVE WISHLIST
//       </button>
//     </div>
//   );
// };

// const ProductList = () => {
//   const [productList, setProductList] = useState(products);

//   const removeProduct = (product) => {
//     const updatedProductList = productList.filter(item => item.Product_id !== product.Product_id); 
//     setProductList(updatedProductList);
//   };

//   return (
//     <div className="product-list">
//       {productList.map((product, index) => (
//         <Product
//           key={index}
//           product={product}
//           removeProduct={removeProduct}
//         />
//       ))}
//     </div>
//   );
// };

// export default ProductList;


import '../styles/productlist.css';
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

  const toggleDetails = (e) => {
    e.preventDefault();
    setShowDetails(!showDetails);
  };

  const handleProductClick = () => {
    navigate('/product', { state: { prodOverView: product.Product_id } });
  };

  const descriptionLines = product.Description.split('\n');
  const firstLine = descriptionLines[0];

  return (
    <div className="product-card" onClick={handleProductClick}>
      <div className='image'>
        <img src={product.Image} alt={product.Name} className="product-image" />
      </div>
      <div className='detailes'>
        <h3>{product.Name}</h3>
        <h>Price:₹{product.Price}</h>
        {showDetails ? (
          <div>
            <p>{product.Description}</p>
            <a href="#" onClick={toggleDetails} className="view-more-link">Viewless</a>
          </div>
        ) : (
          <div>
            <p>{firstLine}</p>
            <a href="#" onClick={toggleDetails} className="view-more-link">Viewmore…</a>
            <span onClick={handleLikeClick} className={`like-icon ${isLiked ? 'liked' : 'red'}`}>♥</span>
          </div>
        )}
      </div>
      <div className='button-container'>
        <button onClick={handleRemoveProduct} className="remove-btn">Removewishlist</button>
        <button onClick={handlePaymentClick} className="add-to-cart-btn">AddtoCart</button>
      </div>
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
        <Product key={index} product={product} removeProduct={removeProduct} />
      ))}
    </div>
  );
};

export default ProductList;