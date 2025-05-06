// components/AboutSections/OurStory.jsx
import React from 'react';
import imgs from '../../assets/index';

const OurStory = () => {
  return (
    <section className="our_story">
      <div className="container">
        <p className="home_about">Home / About</p>
        <div className="our_story_content">
          <div className="story_left">
            <h1 className="story_left_h1">Our Story</h1>
            <p className="story_left_p">
              Launced in 2015, Exclusive is South Asia's premier online shopping marketplace 
              with an active presence in Bangladesh. Supported by wide range of tailored marketing, 
              data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 
              3 millions customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a very fast. 
              Exclusive offers a diverse assortment in categories ranging from consumer.
            </p>
          </div>
          <div className="story_right">
            <img src={imgs.aboutImg1} alt="Our Story" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;