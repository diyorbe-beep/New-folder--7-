import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUP.scss';
import imgs from '../../assets/index';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('https://dummyjson.com/users/add', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      });

      // DummyJSON token qaytarmaydi — faqat foydalanuvchi obyektini saqlaymiz
      localStorage.setItem('user', JSON.stringify(response.data));

      // Muvaffaqiyatli bo‘lsa — bosh sahifaga yo‘naltiramiz
      navigate('/');
    } catch (err) {
      console.error('Signup error:', err);
      setError('Ro‘yxatdan o‘tishda xatolik');
    }
  };

  return (
    <section className="sign_up">
      <div className="wrapper">
        <div className="sign_up_content">
          <div className="sign_up_left">
            <img src={imgs.SingUp} alt="Sign up illustration" />
          </div>
          <div className="sign_up_right">
            <h1 className="sign_up_right_h1">Create an account</h1>
            <p>Enter your details below</p>
            <form className='from' onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="sign_up_input"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="sign_up_input"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="sign_up_input"
                value={formData.email}
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
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <div className="sign_up_btn">
                <button type="submit" className="sign_up_btn_a">
                  Create Account
                </button>
                <button type="button" className="sign_up_btn_btn">
                  <FaGoogle /> Sign up with Google
                </button>
              </div>
            </form>
            <p className="sign_up_p">
              Already have account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
