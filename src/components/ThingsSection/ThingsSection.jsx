import React from 'react';
import imgs from '../../assets/index';
import { FaArrowRight } from 'react-icons/fa';

const ThingsSection = () => {
  return (
    <section className="things">
      <div className="container">
        <div className="things_content">
          <div className="things_left">
            <p>Woman's Fashion<br />
              Men's Fashion<br />
              Electronics<br />
              Home & Lifestyle<br />
              Medicine<br />
              Sports & Outdoor<br />
              Baby's & Toys<br />
              Groceries & Pets<br />
              Health & Beauty</p>
          </div>
          <div className="hr"></div>
          <div className="things_right">
            <div className="things_right_left">
              <img src={imgs.apple} className="things_right_img" alt="" />
              <h1 className="things_right_h1">Up to 10% off Voucher</h1>
              <a className="things_right_a" href="">Shop Now <FaArrowRight /></a>
            </div>
            <div className="things_right_right">
              <img src={imgs.iphone} className="things_right_img2" alt="" />
            </div>
            <div className="things_right_spans">
              <span className="things_right_span1"></span>
              <span className="things_right_span2"></span>
              <span className="things_right_span3 active_span"></span>
              <span className="things_right_span4"></span>
              <span className="things_right_span5"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThingsSection;