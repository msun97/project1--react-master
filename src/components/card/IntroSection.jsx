'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { slides } from '@/data/slides';
import styles from '../css/Intro.module.scss';

const IntroSwiper = () => {
  return (
    <section className={styles.intro}>
      <Swiper
        className={`${styles.introSwiper} custom-swiper`}
        speed={600}
        spaceBetween={30}
        parallax={true}
        effect='fade'
        loop
        fadeEffect={{crossFade:true}}
        autoplay={{delay:5000, disableOnInteraction:true}}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <video 
              src={slide.video} 
              autoPlay 
              loop 
              muted 
              aria-label={`Slide ${index + 1}`}
              className='intro-video' 
            />
            <div className={styles.introTxt}>
              <div className={styles.introTitle}>
                {slide.title}
                <div className={styles.introSubTitle}>
                  {slide.subtitle}
                </div>
              </div>
              <div className={styles.introDescription}>{slide.description}</div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`pagination ${styles.pagination}`}>
        <div className={styles['swiper-button-prev']}></div>
        <div className={styles['swiper-button-next']}></div>
      </div>
      <div className={`scroll ${styles.scroll}`}>
        <div className={`scroll-txt ${styles.scrollTxt}`}>SCROLL</div>
      </div>
    </section>
  );
};

export default IntroSwiper;