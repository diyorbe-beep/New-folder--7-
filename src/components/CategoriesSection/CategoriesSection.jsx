import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import imgs from '../../assets/index';

const CategoriesSection = () => {
  const categories = [
    { name: 'Phones', image: imgs.phone },
    { name: 'Computers', image: imgs.compyuter },
    { name: 'SmartWatch', image: imgs.smartwatch },
    { name: 'Camera', image: imgs.camera },
    { name: 'HeadPhones', image: imgs.headphone },
    { name: 'Gaming', image: imgs.gamepad }
  ];

  return (
    <section className="daily_discount">
      <div className="container">
        <div className="discount_content">
          <div className="discount_up">
            <div className="discount_up_up">
              <span className="discount_up_up_span"></span>
              <h1 className="discount_up_up_h1">Categories</h1>
            </div>
            <div className="discount_up_down">
              <h1 className="discount_up_down_h1">Browse By Category</h1>
              <div className="discount_up_icons">
                <FaArrowLeft className="icons_1" />
                <FaArrowRight className="icons_2" />
              </div>
            </div>
          </div>
          <div className="categories_down">
            {categories.map((category, index) => (
              <div className={`categories_card_1 ${category.active ? 'active_card' : ''}`} key={index}>
                <img src={category.image} alt={category.name} />
                <p className="categories_card_h">{category.name}</p>
              </div>
            ))}
          </div>
          <hr className="categories_hr" />
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;