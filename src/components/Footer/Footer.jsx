import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import imgs from '../../assets/index';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer_content">
          <section className="Exclusive">
            <h3 className="Exclusive_h3">Exclusive</h3>
            <p className="Exclusive_p1">Subscribe</p>
            <p className="Exclusive_p2">Get 10% off your first order</p>
            <div className="Exc_input">
              <input type="text" className="Exc_input_input" placeholder="Enter your email" />
              <FaPaperPlane />
            </div>
          </section>
          <section className="Exclusive">
            <h3 className="Exclusive_h3 Exclusive2">Support</h3>
            <p className="Exclusive_p2 Exclusive2">11 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="Exclusive_p2 Exclusive2">exclusive@gmail.com</p>
            <p className="Exclusive_p2 Exclusive2">+88015-88888-9999</p>
          </section>
          <section className="Exclusive">
            <h3 className="Exclusive_h3 Exclusive2">Account</h3>
            <p className="Exclusive_p2 Exclusive2">My Account</p>
            <p className="Exclusive_p2 Exclusive2">Login / Register</p>
            <p className="Exclusive_p2 Exclusive2">Cart</p>
            <p className="Exclusive_p2 Exclusive2">Wishlist</p>
            <p className="Exclusive_p2 Exclusive2">Shop</p>
          </section>
          <section className="Exclusive">
            <h3 className="Exclusive_h3 Exclusive2">Quick Link</h3>
            <p className="Exclusive_p2 Exclusive2">Privacy Policy</p>
            <p className="Exclusive_p2 Exclusive2">Terms Of Use</p>
            <p className="Exclusive_p2 Exclusive2">FAQ</p>
            <p className="Exclusive_p2 Exclusive2">Contact</p>
          </section>
          <section className="Exclusive Exclusive3">
            <h3 className="Exclusive_h3 Exclusive2">Download App</h3>
            <p className="Exclusive_p2 Exclusive3_p">Save $3 with App New User Only</p>
            <div className="Exclusive3_img">
              <img src={imgs.frame719} alt="" />
              <img src={imgs.frame741} alt="" />
            </div>
          </section>
        </div>
      </div>
      <hr className="Footer_hr" />
      <div className="footer_end">
        Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;