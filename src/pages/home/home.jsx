import React, { useState, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Swiper from '../../components/swipper/swipper';
import './home.scss';
import Cards from '../../components/cards/cards';
import img from '../../assets/index.js'; // ⚠️ shuni unutma!
import DiscountContent from '../../components/categories__cards/Categories_card.jsx';

export default function Home() {
  const FOUR_DAYS_IN_MS = 4 * 24 * 60 * 60 * 1000;
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const savedDate = localStorage.getItem('targetDate');
    let finalTargetDate;

    if (savedDate) {
      finalTargetDate = parseInt(savedDate, 10);
    } else {
      finalTargetDate = Date.now() + FOUR_DAYS_IN_MS;
      localStorage.setItem('targetDate', finalTargetDate.toString());
    }

    setTargetDate(finalTargetDate);
  }, []);

  useEffect(() => {
    if (!targetDate) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
        localStorage.removeItem('targetDate');
      } else {
        setTimeLeft(distance);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (ms) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const CategoryCard = ({ image, title, isActive }) => (
    <div className={`w-1/6 p-4 ${isActive ? 'border-4 border-blue-500' : ''}`}>
      <img src={image} alt={title} className="w-full h-auto" />
      <p className="text-center text-xl mt-2">{title}</p>
    </div>
  );

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="wrapper">
      <div className="home">
        <div className="home_left">
          <a href="">Woman’s Fashion <span><IoIosArrowForward /></span></a>
          <a href="">Men’s Fashion <span><IoIosArrowForward /></span></a>
          <a href="">Electronics <span><IoIosArrowForward /></span></a>
          <a href="">Home & Lifestyle <span><IoIosArrowForward /></span></a>
          <a href="">Medicine <span><IoIosArrowForward /></span></a>
          <a href="">Sports & Outdoor <span><IoIosArrowForward /></span></a>
          <a href="">Baby’s & Toys <span><IoIosArrowForward /></span></a>
          <a href="">Groceries & Pets <span><IoIosArrowForward /></span></a>
          <a href="">Health & Beauty <span><IoIosArrowForward /></span></a>
        </div>
        <div className="home_right">
          <Swiper />
        </div>
      </div>
      <div className="home_bottom">
        <div className="home_cards">
          <div className="home_cards_pro">
            <section>
              <span className='shape'>a</span>
              <h4>Today’s</h4>
            </section>
            <section>
              <h1>Most Sales</h1>
              <span className="days position span_left">Days</span>
              <span className="hours position span_left">Hours</span>
              <span className="minutes position span_left">Minutes</span>
              <span className="seconds position span_left">Seconds</span>
              <h2>{days}<span>:</span>{hours}<span>:</span>{minutes}<span>:</span>{seconds}</h2>
            </section>
          </div>
          <div className="home_card">
            <Cards img={img.gamepat} title="HAVIT HV-G92 Gamepad" title2="$120" title3="$160" title4="(88)" title5="★★★★★" />
            <Cards img={img.klaviyatura} title="AK-900 Wired Keyboard" title2="$960" title3="$1160" title4="(75)" title5="★★★★" />
            <Cards img={img.monitor} title="IPS LCD Gaming Monitor" title2="$370" title3="$400" title4="(99)" title5="★★★★" />
            <Cards img={img.stol} title="S-Series Comfort Chair " title2="$375" title3="$400" title4="(75)" title5="★★★★" />
            <Cards img={img.klaviyatura} title="AK-900 Wired Keyboard" title2="$960" title3="$1160" title4="(75)" title5="★★★★" />
          </div>
          <button className='home_btn'>View All Products</button>
          <hr style={{ marginBottom: "70px" }} />
          <div>
            <DiscountContent />
          </div>
        </div>
      </div>
    </div>
  );
}
