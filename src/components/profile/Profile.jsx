import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.scss';

const Profile = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
    window.location.reload();
  };

  const menuItems = [
    { id: 1, name: 'Manage My Account', path: '/account' },
    { id: 2, name: 'My Order', path: '/orders' },
    { id: 3, name: 'My Cancellations', path: '/cancellations' },
    { id: 4, name: 'My Reviews', path: '/reviews' },
  ];

  return (
    <div className="account-management" onClick={onClose}>
      <div className="account-menu" onClick={(e) => e.stopPropagation()}>
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

export default Profile;
