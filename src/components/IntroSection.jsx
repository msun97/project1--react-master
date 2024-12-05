'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { slides } from '@/data/slides';


const IntroSwiper = () => {
  return (
    <section className='intro'>
      <Swiper 
        className='introswiper' 
        modules={[Pagination, Navigation]} 
        pagination={{ clickable: true }} 
        navigation 
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='intro-slide'> 
            <video 
              src={slide.video} 
              autoPlay 
              loop 
              muted 
              aria-label={`Slide ${index + 1}`} 
              className='intro-video' 
            />
            <div className="intro-txt">
              <div className='intro-title'>
                {slide.title}
                <div className='intro-description'>
                  {slide.subtitle}
                </div>
              </div>
              <div className='intro-description'>{slide.description}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="scroll">
        <div className="scroll-txt">SCROLL</div>
      </div>
    </section>
  );
};

export default IntroSwiper;
