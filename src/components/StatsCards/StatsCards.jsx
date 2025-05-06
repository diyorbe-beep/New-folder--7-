// components/AboutSections/StatsCards.jsx
import React from 'react';
import { CiShop } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";

const StatsCards = () => {
  return (
    <section>
      <div className="container">
        <div className="about_card_content">
          <div className="__1_card">
            <div className="_1_card_icons">
              <CiShop  className='icons'/>
            </div>
            <h2>10.5k</h2>
            <p>Sellers active our site</p>
          </div>
          <div className="__1_card about_card_active">
            <div className="_1_card_icons about_card_active2">
              <FaDollarSign className='icons1' />
            </div>
            <h2>33k</h2>
            <p>Monthly Product Sale</p>
          </div>
          <div className="__1_card">
            <div className="_1_card_icons">
              <FaBagShopping className='icons2' />
            </div>
            <h2>45.5k</h2>
            <p>Customer active in our site</p>
          </div>
          <div className="__1_card">
            <div className="_1_card_icons">
              <FaSackDollar className='icons3' />
            </div>
            <h2>25k</h2>
            <p>Annual gross sale in our site</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCards;