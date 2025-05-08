import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaBars,
  FaXmark,
  FaMagnifyingGlass,
  FaHeart,
  FaCartShopping,
  FaUser
} from 'react-icons/fa6';
import Profile from '../profile/Profile'; // Modal komponenti

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); // Modal holatini boshqarish
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Foydalanuvchi holatini tekshirish
  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
    window.location.reload(); // Navbar yangilanishi uchun
  };

  return (
    <header>
      <nav className="nav">
        {/* Profile komponenti - Modal */}
        <Profile isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

        <div className="wrapper">
          <div className="navbar">
            <div className="nav_content">
              <div className="nav_logo">
                <Link className="nav_logo" to="/">Exclusive</Link>
              </div>

              <ul className="nav_link">
                <li><Link to="/" className="nav_a">Home</Link></li>
                <li><Link to="/contact" className="nav_a">Contact</Link></li>
                <li><Link to="/about" className="nav_a">About</Link></li>
                {!isLoggedIn && <li><Link to="/signup" className="nav_a">Sign Up</Link></li>}
              </ul>

              <div className={`resNav ${isNavOpen ? 'open' : ''}`}>
                <FaXmark className="close" onClick={toggleNav} />
                <ul className="nav_link resNav_list">
                  <li><Link to="/" className="nav_a">Home</Link></li>
                  <li><Link to="/contact" className="nav_a">Contact</Link></li>
                  <li><Link to="/about" className="nav_a">About</Link></li>
                  {!isLoggedIn && <li><Link to="/signup" className="nav_a">Sign Up</Link></li>}
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

                {/* Agar foydalanuvchi login bo'lgan bo‘lsa */}
                {isLoggedIn ? (
                  <>
                    {/* Modalni ochish */}
                    <button className="nav_icon" onClick={() => setModalOpen(prev => !prev)}>
                      <FaUser  className="nav_icon" />
                    </button>

                    <button onClick={handleLogout} className="nav_a" style={{ border: 'none', background: 'black', color: 'white', cursor: 'pointer', padding: '5px 10px' }}>
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link to="/login" className="nav_a">Log In</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
