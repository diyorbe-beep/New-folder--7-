// pages/AboutPage.jsx
import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import Navbar from '../../components/Header/Header';
import OurStory from '../../components/OurStory/OurStory';
import StatsCards from '../../components/StatsCards/StatsCards';
import TeamMembers from '../../components/TeamMembers/TeamMembers';
import Services from '../../components/Services/Services ';
import Footer from '../../components/Footer/Footer';
import './about.scss';

const AboutPage = () => {
  return (
    <>
      <TopBar />
      <div className="wrapper">
        <Navbar activePage="about" />
        <main>
          <OurStory />
          <StatsCards />
          <TeamMembers />
          <Services />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;