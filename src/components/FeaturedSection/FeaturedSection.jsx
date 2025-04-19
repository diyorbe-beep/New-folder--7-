import React from 'react';

const FeaturedSection = () => {
  return (
    <section className="Featured">
      <div className="container">
        <div className="featured_content">
          <div className="discount_up featured_up">
            <div className="discount_up_up">
              <span className="discount_up_up_span"></span>
              <h1 className="discount_up_up_h1">Featured</h1>
            </div>
            <div className="discount_up_down">
              <h1 className="discount_up_down_h1">New Arrival</h1>
            </div>
          </div>
          <div className="featured_down">
            <div className="featured_card1">
              <h3 className="featured_card1_h3">PlayStation 5</h3>
              <p className="featured_card1_p">Black and White version of the PS5 coming out on sale.</p>
              <a href="#" className="featured_card1_a">Shop Now</a>
            </div>
            <div className="featured_cards">
              <div className="featured_card2">
                <h3 className="featured_card1_h3">Women's Collections</h3>
                <p className="featured_card1_p">Featured woman collections that give you another vibe.</p>
                <a href="#" className="featured_card1_a">Shop Now</a>
              </div>
              <div className="featured_cards2">
                <div className="featured_card3">
                  <h3 className="featured_card1_h3">Speakers</h3>
                  <p className="featured_card1_p">Amazon wireless speakers.</p>
                  <a href="#" className="featured_card1_a">Shop Now</a>
                </div>
                <div className="featured_card3 featured_card4">
                  <h3 className="featured_card1_h3">Perfume</h3>
                  <p className="featured_card1_p">GUCCI INTENSE OUD EDP</p>
                  <a href="#" className="featured_card1_a">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;