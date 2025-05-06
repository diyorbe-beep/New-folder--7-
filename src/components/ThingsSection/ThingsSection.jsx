import React from 'react';
import NavSwiper from '../nav_swipper/nav_swipper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function ThingsSection() {
  return (
    <section className="things">
      <div className="container">
        <div className="things_content">
          <div className="things_left">
            <h4>Woman’s Fashion</h4>
            <h4>Men’s Fashion</h4>
            <h4>Electronics</h4>
            <h4>Home & Lifestyle</h4>
            <h4>Medicine</h4>
            <h4>Sports & Outdoor</h4>
            <h4>Baby’s & Toys</h4>
            <h4>Groceries & Pets</h4>
            <h4>Health & Beauty</h4>
          </div>
          <div className="hr"></div>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide><NavSwiper /></SwiperSlide>
            {/* <SwiperSlide><NavSwiper /></SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
