// components/AboutSections/Services.jsx
import React from 'react';
import { FaTruck, FaHeadset, FaShieldHalved } from 'react-icons/fa6';

const Services = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="services">
      <div className="container">
        <div className="services_content">
          <div className="services_cards">
            <div className="services_card1">
              <div className="services_card1_up">
                <div className="services_card_1_up_litte">
                  <FaTruck  />
                </div>
              </div>
              <h3>FREE AND FAST DELIVERY</h3>
              <p>Free delivery for all orders over $140</p>
            </div>
            <div className="services_card1">
              <div className="services_card1_up">
                <div className="services_card_1_up_litte">
                  <FaHeadset  />
                </div>
              </div>
              <h3>24/7 CUSTOMER SERVICE</h3>
              <p>Friendly 24/7 customer support</p>
            </div>
            <div className="services_card1">
              <div className="services_card1_up">
                <div className="services_card_1_up_litte">
                  <FaShieldHalved  />
                </div>
              </div>
              <h3>MONEY BACK GUARANTEE</h3>
              <p>We return money within 30 days</p>
            </div>
          </div>
        </div>
        <button className="button toTop" onClick={scrollToTop}>
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z">
            </path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Services;