import React from 'react';


const CategoryCard = ({ image, title, isActive }) => (
  <div className={`categories_card_1 ${isActive ? 'active_card' : ''}`}>
    <img src={image} alt={title} />
    <p className="categories_card_h">{title}</p>
  </div>
);

const DiscountContent = () => {
  const categories = [
    { image: '', title: 'Phones' },
    { image: '../img/Category-Computer.png', title: 'Computers' },
    { image: '../img/Category-SmartWatch.png', title: 'SmartWatch' },
    { image: '../img/Category-Camera.png', title: 'Camera', isActive: true },
    { image: '../img/Category-Headphone.png', title: 'HeadPhones' },
    { image: '../img/Category-Gamepad.png', title: 'Gaming' },
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
