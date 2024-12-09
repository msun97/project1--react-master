'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '../css/Brands.module.scss'

const brands = [
  { name: "CLIO PROFESSIONAL", className: "clio" },
  { name: "Peripera", className: "peripera" },
  { name: "goodal", className: "goodal" },
  { name: "DERMATORY", className: "dermatory" },
  { name: "HealingBird", className: "healingbird" },
  { name: "A.BLACK", className: "ablack" },
  { name: "TWINKLEPOP", className: "twinklepop" },
];

const Brands = () => {
  return (
    <div className={styles.brandsCard}>
      <Swiper 
        className={styles.brandSwiper}
        spaceBetween={10}
        slidesPerView={'auto'}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <a href="#">
              <div className={`${styles.brandsIncard} ${brand.className}`}>
                {brand.name}
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
