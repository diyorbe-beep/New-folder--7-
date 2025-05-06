import React, { useState, useEffect } from 'react';
import { FaHeart, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // ✅ Add this line
import imgs from '../../assets/index';


export default function Home() {
  const FOUR_DAYS_IN_MS = 4 * 24 * 60 * 60 * 1000;
  const [targetDate, setTargetDate] = useState(null);

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

  // Timer component ichki funksiya sifatida
  const Timer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

    useEffect(() => {
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

    const { days, hours, minutes, seconds } = formatTime(timeLeft);

    return (
      <div className="discount_time">
        <span className="discount_span">Days</span>
        <span className="discount_span">Hours</span>
        <span className="discount_span">Minutes</span>
        <span className="discount_span">Seconds</span>
        <h1 className="discount_time_h1">
          {String(days).padStart(2, '0')}<span className="h1_span">:</span>
          {String(hours).padStart(2, '0')}<span className="h1_span">:</span>
          {String(minutes).padStart(2, '0')}<span className="h1_span">:</span>
          {String(seconds).padStart(2, '0')}
        </h1>
      </div>
    );
  };

  const DiscountSection = ({ title, subtitle, showTimer, showViewAll }) => {
    const products = [
      {
        id: 1,
        discount: '-40%',
        image: imgs.gamepat,
        name: 'HAVIT HV-G92 Gamepad',
        price: '$120',
        oldPrice: '$160',
        rating: '⭐⭐⭐⭐⭐ (88)'
      },
      {
        id: 2,
        discount: '-35%',
        image: imgs.klaviyatura,
        name: 'AK-900 Wired Keyboard',
        price: '$960',
        oldPrice: '$1160',
        rating: '⭐⭐⭐⭐ (75)'
      },
      {
        id: 3,
        discount: '-30%',
        image: imgs.monitor,
        name: 'IPS LCD Gaming Monitor',
        price: '$370',
        oldPrice: '$400',
        rating: '⭐⭐⭐⭐⭐ (99)'
      },
      {
        id: 4,
        discount: '-25%',
        image: imgs.stol,
        name: 'S-Series Comfort Chair',
        price: '$375',
        oldPrice: '$400',
        rating: '⭐⭐⭐⭐⭐ (99)'
      },
      
    ];

    return (
      <section className="daily_discount">
        <div className="container">
          <div className="discount_content">
            <div className="discount_up">
              <div className="discount_up_up">
                <span className="discount_up_up_span"></span>
                <h1 className="discount_up_up_h1">{title}</h1>
              </div>
              <div className="discount_up_down">
                <h1 className="discount_up_down_h1">{subtitle}</h1>
                {showTimer && targetDate && <Timer targetDate={targetDate} />}
              </div>
            </div>
            <div className="discount_down">
              {products.map(product => (
                <div className="dowin_card_1" key={product.id}>
                  <div className="_1">
                    <span className="card_span">{product.discount}</span>
                    <div className="down_card_icons">
                      <FaHeart />
                      <FaEye />
                    </div>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <Link to='/Card' className="toCard">Add To Cart</Link>
                  <h1 className="discount_down_card_h2">{product.name}</h1>
                  <p className="discount_down_card_p">
                    {product.price}<span>{product.oldPrice}</span>
                  </p>
                  <p>{product.rating}</p>
                </div>
              ))}
            </div>
            {showViewAll && <button className="discount_btn">View All Products</button>}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div>
      <DiscountSection
        title="Today’s"
        subtitle="Flash Sales"
        showTimer={true}
        showViewAll={true}
      />
    </div>
  );
}
