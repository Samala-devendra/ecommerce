

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList'; 
import PaymentPage from './components/PaymentPage';
import ProductOverview from './components/ProductOverview'; 

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1></h1>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/Product" element={<ProductOverview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;