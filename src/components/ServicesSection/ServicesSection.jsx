import React from 'react';
import { FaTruck, FaHeadset  } from 'react-icons/fa';
import { FaShieldHalved } from "react-icons/fa6";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaTruck />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140"
    },
    {
      icon: <FaHeadset />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support"
    },
    {
      icon: <FaShieldHalved />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days"
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <div className="services_content">
          <div className="services_cards">
            {services.map((service, index) => (
              <div className="services_card1" key={index}>
                <div className="services_card1_up">
                  <div className="services_card_1_up_litte">
                    {service.icon}
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;