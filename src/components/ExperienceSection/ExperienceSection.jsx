import React, { useState, useEffect } from 'react';
import imgs from '../../assets/index';

const ExperienceSection = () => {
  const FOUR_DAYS_IN_MS = 4 * 24 * 60 * 60 * 1000;
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const savedDate = localStorage.getItem('expTargetDate');
    let finalTargetDate;

    if (savedDate) {
      finalTargetDate = parseInt(savedDate, 10);
    } else {
      finalTargetDate = Date.now() + FOUR_DAYS_IN_MS;
      localStorage.setItem('expTargetDate', finalTargetDate.toString());
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
        localStorage.removeItem('expTargetDate');
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
    <section className="experience">
      <div className="container">
        <div className="experience_content">
          <div className="exp_left">
            <p className="exp_left_p">Categories</p>
            <h1 className="exp_left_h">Enhance Your Music Experience</h1>
            <div className="exp_span">
              <span className="exp_span2">{String(hours).padStart(2, '0')}<br /><span>Hours</span></span>
              <span className="exp_span2">{String(days).padStart(2, '0')}<br /><span>Days</span></span>
              <span className="exp_span2">{String(minutes).padStart(2, '0')}<br /><span>Minutes</span></span>
              <span className="exp_span2">{String(seconds).padStart(2, '0')}<br /><span>Seconds</span></span>
            </div>
            <button className="exp_btn">Buy Now!</button>
          </div>
          <div className="exp_right">
            <img src={imgs.kalonka} alt="" className="exp_img" />
            <span><img src={imgs.shadow} alt="" /></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
