import React from 'react';
import './categories_card.scss';
import img from '../../assets/index.js';

const CategoryCard = ({ image, title, isActive }) => (
  <div className={`categories_card_1 ${isActive ? '' : ''}`}>
    <img src={image} alt={title} />
    <p className="categories_card_h">{title}</p>
  </div>
);

const DiscountContent = () => {
  const categories = [
    { image: img.phone, title: 'Phones' },
    { image: img.compyuter, title: 'Computers' },
    { image: img.smartwatch, title: 'SmartWatch' },
    { image: img.camera, title: 'Camera', isActive: true },
    { image: img.headphone, title: 'HeadPhones' },
    { image: img.gamepad, title: 'Gaming' },
  ];

  return (
    <div className="discount_content">
      <div className="discount_up">
        <div className="discount_up_up">
          <span className="discount_up_up_span"></span>
          <h1 className="discount_up_up_h1">Categories</h1>
        </div>
        <div className="discount_up_down">
          <h1 className="discount_up_down_h1">Browse By Category</h1>
          <div className="discount_up_icons">
            <i className="fa-solid fa-arrow-left fa-lg icons_1" style={{ color: '#000000' }}></i>
            <i className="fa-solid fa-arrow-right fa-lg icons_2" style={{ color: '#000000' }}></i>
          </div>
        </div>
      </div>
      <div className="categories_down">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            title={category.title}
            isActive={category.isActive}
          />
        ))}
      </div>
      <hr className="categories_hr" />
    </div>
  );
};

export default DiscountContent;
