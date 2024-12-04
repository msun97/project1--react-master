'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'


const IntroSwiper = () => {
  const slides = [
    {
      video: '/video/pc_main_visual1.mp4',
      title: 'Global market leader',
      title2: 'CLIO COSMETICS',
      subtitle: '새로운 변화를 즐기는 사람에게 자신감과 즐거움을.',
    },
    {
      video: '/video/pc_main_visual2.mp4',
      title: 'PEOPLE & FOREST',
      title2: 'Comunication',
      subtitle: '배려와 존중을 기반으로, 사람과 지역사회와 함께 소통하고 성장하는.',
    },
    {
      video: '/video/pc_main_visual3.mp4',
      title: 'CREATE & CULTURE',
      title2: 'Social Resposibility',
      subtitle: '사회에도 선한 영향력이 발휘될 수 있도록 즐거움을 전파하고 온기를 나눕니다.',
    },
  ];

  return (
    <section className='intro'>
      <Swiper className='introswiper' pagination={{ clickable: true }} navigation>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <video src={slide.video} autoPlay loop muted />
            <div className="txt">
              <div className='title'>
                {slide.title}
                <div className='title title2'>
                  {slide.title2}
                </div>
              </div>
              <div className='subtitle'>{slide.subtitle}</div>
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
