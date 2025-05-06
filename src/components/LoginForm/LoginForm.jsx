// components/Auth/LoginForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgs from '../../assets/index'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', formData);
    // Redirect to home after successful login
    // navigate('/');
  };

  return (
    <section className="sign_up">
      <div className="wrapper">
        <div className="sign_up_content">
          <div className="sign_up_left">
            <img src={imgs.SingUp} alt="Login illustration" />
          </div>
          <div className="sign_up_right">
            <h1 className="sign_up_right_h1">Log in to Exclusive</h1>
            <p>Enter your details below</p>
            <form className='from' onSubmit={handleSubmit}>
              <input
                type="text"
                name="emailOrPhone"
                placeholder="Email or Phone Number"
                className="sign_up_input"
                value={formData.emailOrPhone}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="sign_up_input"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div className="sign_up_btn log_in_btn">
                <button type="submit" className="sign_up_btn_a log_in_btn_a">
                  Log In
                </button>
                <Link to="/forgot-password" className="log_in_btn_a2">
                  Forget Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;