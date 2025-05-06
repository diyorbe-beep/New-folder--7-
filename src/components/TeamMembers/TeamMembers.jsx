// components/AboutSections/TeamMembers.jsx
import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import imgs from '../../assets/index';

const TeamMembers = () => {
  return (
    <section className="workers">
      <div className="container">
        <div className="workers_cards">
          <div className="workers_1">
            <div className="workers_card_img">
              <img src={imgs.aboutImg2} alt="Tom Cruise" />
            </div>
            <h1 className="workers_card_h1">Tom Cruise</h1>
            <p>Founder & Chairman</p>
            <div className="social-icons">
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
          <div className="workers_1">
            <div className="workers_card_img">
              <img src={imgs.aboutImg3} alt="Emma Watson" />
            </div>
            <h1 className="workers_card_h1">Emma Watson</h1>
            <p>Managing Director</p>
            <div className="social-icons">
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
          <div className="workers_1">
            <div className="workers_card_img about_workers_end_card">
              <img src={imgs.aboutImg4} alt="Will Smith" />
            </div>
            <h1 className="workers_card_h1">Will Smith</h1>
            <p>Product Designer</p>
            <div className="social-icons">
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="things_right_spans about_span">
          <span className="things_right_span1"></span>
          <span className="things_right_span2"></span>
          <span className="things_right_span3 active_span"></span>
          <span className="things_right_span4"></span>
          <span className="things_right_span5"></span>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;