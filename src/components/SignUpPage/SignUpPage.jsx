// pages/SignUpPage.jsx
import React from 'react';
import TopBar from '../TopBar/TopBar';
import Navbar from '../Header/Header'
import SignUpForm from '../SignUpForm/SignUpForm';
import Footer from '../Footer/Footer';

const SignUpPage = () => {
  return (
    <>
      <TopBar />
      <div className="wrapper">
        <Navbar activePage="signup" />
        <SignUpForm />
      </div>
      <Footer />
    </>
  );
};

export default SignUpPage;