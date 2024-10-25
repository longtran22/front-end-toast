import React, { useState } from "react";
import "./thanh_toan.css"
const PaymentComponent = () => {
    const products = [
        {
          name: "Sản phẩm A",
          quantity: 2,
          price: 100.0,
        },
        {
          name: "Sản phẩm B",
          quantity: 1,
          price: 150.0,
        },
        {
          name: "Sản phẩm C",
          quantity: 3,
          price: 200.0,
        },
      ];
      const totalAmount=10000
  const [cashGiven, setCashGiven] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [change, setChange] = useState(0);

  const handleCashChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setCashGiven(value);
    calculateChange(value);
  };

  const calculateChange = (cash) => {
    if (cash >= totalAmount) {
      setChange(cash - totalAmount);
    } else {
      setChange(0);
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="tt-payment-container">
      <h2>Thanh Toán</h2>
      <div className="tt-form-group">
        <label>Tổng tiền:</label>
        <span>{totalAmount}</span>
      </div>
      <div className="tt-form-group">
        <label>Số tiền khách đưa:</label>
        <input
          type="number"
          value={cashGiven}
          onChange={handleCashChange}
          disabled={paymentMethod !== "cash"}
        />
      </div>
      <div className="tt-form-group">
        <label>Phương thức thanh toán:</label>
        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="cash">Tiền mặt</option>
          <option value="transfer">Chuyển khoản</option>
        </select>
      </div>
      
      {paymentMethod === "cash" && (
        <div className="tt-form-group">
          <label>Số tiền trả lại:</label>
          <span>{change}</span>
        </div>
      )}
      <div className="tt-product-list">
        <h3>Danh sách sản phẩm</h3>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - {product.quantity} x {product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PaymentComponent;