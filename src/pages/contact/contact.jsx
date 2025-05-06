// pages/ContactPage.jsx
import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import Navbar from '../../components/Header/Header';
import ContactMain from '../../components/contact/contact';
import Footer from '../../components/Footer/Footer';

const ContactPage = () => {
    return (
        <>
            <TopBar />
            <div className="wrapper">
                <Navbar />
                <ContactMain />
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;