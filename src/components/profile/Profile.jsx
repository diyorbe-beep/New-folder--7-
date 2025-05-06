import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.scss'

const AccountManagement = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    console.log('User logged out');
    // Redirect to login page or home page after logout
    navigate('/login');
  };

  const menuItems = [
    { id: 1, name: 'Manage My Account', path: '/account' },
    { id: 2, name: 'My Order', path: '/orders' },
    { id: 3, name: 'My Cancellations', path: '/cancellations' },
    { id: 4, name: 'My Reviews', path: '/reviews' },
  ];

  return (
    <div className="account-management">
      <div className="account-menu">
        <h2>Account</h2>
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.id} className="menu-item">
              <button 
                className="menu-button" 
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </button>
            </li>
          ))}
          <li className="menu-item">
            <button 
              className="menu-button logout" 
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountManagement;