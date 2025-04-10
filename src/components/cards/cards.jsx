import React from 'react';
import './cards.scss';

function ProductCard(props) {
  return (
    <div className="card">
      <div className="product-card">
        <div className="discount-badge">-40%</div>

        <div className="product-image">
          <img src={props.img} alt="" />
          <div className="addcards">
            <a>Add To Cart</a>
          </div>
        </div>

        <div className="product-info">
          <h3 className="product-title">{props.title}</h3>

          <div className="price-container">
            <span className="current-price">{props.title2}</span>
            <span className="original-price">{props.title3}</span>
          </div>

          <div className="rating">
            <div className="stars">{props.title5}</div>
            <span className="review-count">{props.title4}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
