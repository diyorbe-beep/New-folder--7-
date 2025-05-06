// pages/ProductPage.jsx
import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import Navbar from '../../components/Header/Header';
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo';
import Footer from '../../components/Footer/Footer';
import './ProductPage.scss'

const ProductPage = () => {
  return (
    <>
      <TopBar />
      <main>
        <div className="wrapper">
        <Navbar activePage="product" />
          <p className="card_content_p">Account / Gaming / <span>Havic HV G-92 Gamepad View Cart</span></p>
          <div className="card_content">
            <ProductGallery />
            <div>
              <ProductDetails />
              <DeliveryInfo />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;