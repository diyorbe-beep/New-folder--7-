// components/Product/DeliveryInfo.jsx
import React from 'react';
import { FaTruck, FaRotateLeft } from 'react-icons/fa6';

const DeliveryInfo = () => {
  return (
    <div className="delivery">
      <div className="delivery_up">
        <FaTruck />
        <div className="delivery_title">
          <h4>Free Delivery</h4>
          <p>Enter your postal code for Delivery Availability</p>
        </div>
      </div>
      <hr />
      <div className="delivery_down">
        <FaRotateLeft />
        <div className="delivery_title">
          <h4>Return Delivery</h4>
          <p>Free 30 Days Delivery Returns. Details</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;