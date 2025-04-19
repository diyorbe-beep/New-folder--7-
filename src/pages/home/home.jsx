import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import Header from '../../components/Header/Header';
import ThingsSection from '../../components/ThingsSection/ThingsSection';
import DiscountSection from '../../components/DiscountSection/DiscountSection';
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection';
import ProductsSection from '../../components/ProductsSection/ProductsSection';
import ExperienceSection from '../../components/ExperienceSection/ExperienceSection';
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import '../../style/main.scss';
import './home.scss';

const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="wrapper">
        <div>
          <Header />
          <main>
            <ThingsSection />
            <DiscountSection
              title="Today's"
              subtitle="Most Sales"
              showTimer={true}
              showViewAll={true}
            />
            <CategoriesSection />
            <ProductsSection />
            <ExperienceSection />
            <DiscountSection
              title="Our Products"
              subtitle="Explore Our Products"
              showTimer={false}
              showViewAll={true}
            />
            <FeaturedSection />
            <ServicesSection />
            <ScrollToTop />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;