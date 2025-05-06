// pages/LoginPage.jsx
import React from 'react';
import TopBar from '../TopBar/TopBar';
import Navbar from '../Header/Header';
import LoginForm from '../LoginForm/LoginForm';
import Footer from '../Footer/Footer';

const LoginPage = () => {
    return (
        <>
            <TopBar />
            <div className="wrapper">
                <Navbar activePage="login" />
                <main>
                    <LoginForm />
                </main>
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;