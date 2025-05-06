import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars, FaXmark, FaMagnifyingGlass, FaHeart, FaCartShopping } from 'react-icons/fa6';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <nav className="nav">
        <div className="container">
          <div className="navbar">
            <div className="nav_content">
              <div className="nav_logo">Exclusive</div>
              <ul className="nav_link">
                <li><Link to="/" className="nav_a">Home</Link></li>
                <li><Link to="/contact" className="nav_a">Contact</Link></li>
                <li><Link to="/about" className="nav_a">About</Link></li>
                <li><Link to="/signup" className="nav_a">Sign Up</Link></li>

              </ul>
              <div className={`resNav ${isNavOpen ? 'open' : ''}`}>
                <FaXmark className="close" onClick={toggleNav} />
                <ul className="nav_link resNav_list">
                  <li><Link to="/" className="nav_a">Home</Link></li>
                  <li><Link to="/contact" className="nav_a">Contact</Link></li>
                  <li><Link to="/about" className="nav_a">About</Link></li>
                  <li><Link to="/signup" className="nav_a">Sign Up</Link></li>

                </ul>
              </div>
              <div className="nav_right">
                <FaBars className="bars" onClick={toggleNav} />
                <div className="nav_input">
                  <input type="text" placeholder="What are you looking for?" className="nav_input" />
                  <FaMagnifyingGlass className="search" />
                </div>
                <FaHeart className="nav_icon" />
                <FaCartShopping className="nav_icon" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;