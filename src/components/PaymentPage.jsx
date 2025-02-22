
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { product } = location.state || {}; 

  const [paymentMethod, setPaymentMethod] = useState('');
  const [isGiftCardModalVisible, setGiftCardModalVisible] = useState(false);

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const [selectedBank, setSelectedBank] = useState('');

  const deliveryCharges = 50;
  const packagingCharges = 30;
  const totalSavings = 100; 
  const totalPrice = product.Price + deliveryCharges + packagingCharges - totalSavings;

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardDetailsChange = (event) => {
    const { name, value } = event.target;
    setCardDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    if (paymentMethod === 'Credit/Debit/ATM Card' && !cardDetails.cardNumber) {
      alert('Please fill in your card details.');
      return;
    }

    if (paymentMethod === 'Net Banking' && !selectedBank) {
      alert('Please select a bank.');
      return;
    }
    alert(`Payment successful for ${product.Name} using ${paymentMethod}`);
    navigate('/'); 
  };

  const toggleGiftCardModal = () => {
    setGiftCardModalVisible(!isGiftCardModalVisible);
  };

  if (!product) {
    return <p>No product selected for payment!</p>;
  }

  return (
    <div classNmae="body">
    <div className="payment-page">
      <div className="left-column">
        <h2>Order Summary</h2>
      <div class="summary">
        <div className="order-summary">
          <img src={product.Image} alt={product.Name} className="product-image" />
          <h3>{product.Name}</h3>
          <p>Price: ₹{product.Price}</p>
          <p>Seller: {product.Seller}</p>
          <p>Category: {product.Category}</p>
      </div>

        </div>
        <h3>Select Payment Method</h3>
        <div className="payment-method">
          <input
            type="radio"
            id="flipkart-pay-later"
            name="payment-method"
            value="Flipkart Pay Later"
            checked={paymentMethod === 'Flipkart Pay Later'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="flipkart-pay-later">Flipkart Pay Later</label>
          <br />
          <input
            type="radio"
            id="phonepe"
            name="payment-method"
            value="PhonePe (UPI, Wallet)"
            checked={paymentMethod === 'PhonePe (UPI, Wallet)'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="phonepe">PhonePe (UPI, Wallet)</label>
          <br />
          <input
            type="radio"
            id="credit-card"
            name="payment-method"
            value="Credit/Debit/ATM Card"
            checked={paymentMethod === 'Credit/Debit/ATM Card'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="credit-card">Credit/Debit/ATM Card</label>
          <br />
          <input
            type="radio"
            id="net-banking"
            name="payment-method"
            value="Net Banking"
            checked={paymentMethod === 'Net Banking'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="net-banking">Net Banking</label>
          <br />
          <input
            type="radio"
            id="cash-on-delivery"
            name="payment-method"
            value="Cash on Delivery"
            checked={paymentMethod === 'Cash on Delivery'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="cash-on-delivery">Cash on Delivery</label>
          <br />
          <input
            type="radio"
            id="emi"
            name="payment-method"
            value="EMI (Easy Installments)"
            checked={paymentMethod === 'EMI (Easy Installments)'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="emi">EMI (Easy Installments) - Not Applicable</label>
          <br />
          <input
            type="radio"
            id="gift-card"
            name="payment-method"
            value="Gift Card"
            checked={paymentMethod === 'Gift Card'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="gift-card">Gift Card - Add New</label>
        </div>

      
        {paymentMethod === 'Credit/Debit/ATM Card' && (
          <div className="credit-card-details">
            <h4>Enter Card Details</h4>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={handleCardDetailsChange}
              maxLength={16}
            />
            <input
              type="text"
              name="expirationDate"
              placeholder="Expiration Date (MM/YY)"
              value={cardDetails.expirationDate}
              onChange={handleCardDetailsChange}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={handleCardDetailsChange}
              maxLength={3}
            />
          </div>
        )}

    
        {paymentMethod === 'Net Banking' && (
          <div className="net-banking-details">
            <h4>Select Your Bank</h4>
            <select
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
            >
              <option value="">Select Bank</option>
              <option value="HDFC">HDFC Bank</option>
              <option value="SBI">State Bank of India (SBI)</option>
              <option value="ICICI">ICICI Bank</option>
              <option value="Axis">Axis Bank</option>
              <option value="Kotak">Kotak Mahindra Bank</option>
            </select>
          </div>
        )}

        {isGiftCardModalVisible && (
          <div className="gift-card-modal">
            <h4>Enter Gift Card Details</h4>
            <input type="text" placeholder="Enter Gift Card Code" />
            <button onClick={toggleGiftCardModal}>Submit Gift Card</button>
          </div>
        )}

        <button onClick={handleSubmit}>Proceed to Pay</button>
      </div>

    <div class="price" >
      <div className="right-column">
        <h3>Price Details</h3>
        <p>Price: ₹{product.Price}</p>
        <p>Delivery Charges: ₹{deliveryCharges}</p>
        <p>Packaging Charges: ₹{packagingCharges}</p>
        <p>Total Savings: ₹{totalSavings}</p>
        <p>Total Price: ₹{totalPrice}</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default PaymentPage;
