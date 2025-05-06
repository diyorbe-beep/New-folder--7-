// components/Product/ProductDetails.jsx
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const [selectedSize, setSelectedSize] = useState('M');

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="card_right">
      <h1 className="card_right_h1">Havic HV G-92 Gamepad</h1>
      <p className="card_right_p1">⭐⭐⭐⭐(150 Reviews) | <span>In Stock</span></p>
      <h3 className="card_right_h3">$192.00</h3>
      <p className="card_right_p1">
        PlayStation 5 Controller Skin High quality vinyl with air channel
        adhesive for easy bubble free install & mess free removal Pressure sensitive.
      </p>
      <hr />
      <h1 className="card_right_h1-2">
        Colours: <span className="card_right_h1-2_span"> </span> 
        <span className="card_right_h1-2_span2"></span>
      </h1>
      <h3 className="card_right_h3_2">
        Size: 
        {sizes.map(size => (
          <span 
            key={size}
            className={selectedSize === size ? 'active_span3' : ''}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </span>
        ))}
      </h3>
      <div className="card_btns">
        <div className="card_btn_btn">
          <button className="card_btn_btns1" onClick={decreaseQuantity}>-</button>
          <span className="card_btn_span">{quantity}</span>
          <button className="card_btn_btns2" onClick={increaseQuantity}>+</button>
        </div>
        <button className="card_btns_btn">Buy Now</button>
        <button className="card_btns_btn_icon">
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;