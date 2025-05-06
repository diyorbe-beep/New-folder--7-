// components/ContactMain.jsx
import React from 'react';
import './contact.scss';
import { FaPhone, FaEnvelope } from 'react-icons/fa6';

const ContactMain = () => {
  return (
    <main>
      <div className="wrapper">
        <p className="contact_p">Home / Contact</p>
        <div className="contact">
          <div className="contact_left">
            <div className="dadsa">
              <div className="contact_left_icon1">
                <FaPhone />
              </div>
              <h3>Call To Us</h3>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
            <hr />
            <div className="dadsa">
              <div className="contact_left_icon1">
                <FaEnvelope />
              </div>
              <h3>Write To US</h3>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
          <div className="contact_right">
            <div className="contact_inputs">
              <input type="text" placeholder="Your Name *" />
              <input type="text" placeholder="Your Email *" />
              <input type="text" placeholder="Your Phone *" />
            </div>
            <textarea name="" id="" placeholder="Your Massage"></textarea>
            <button className="contact_right_btn">Send Massage</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactMain;