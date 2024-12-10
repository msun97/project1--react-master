'use client';
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade, Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import { slides } from '@/data/slides';
import styles from '../css/Intro.module.scss';
import gsap from 'gsap';

SwiperCore.use([Autoplay, EffectFade, Pagination, Navigation]);

const IntroSwiper = () => {
  const swiperRef = useRef(null);
  const titleRefs = useRef([]); // introTitle 요소를 저장하는 배열
  const descriptionRefs = useRef([]); // introDescription 요소를 저장하는 배열

  useEffect(() => {
    titleRefs.current = titleRefs.current.slice(0, slides.length);
    descriptionRefs.current = descriptionRefs.current.slice(0, slides.length);

    // 초기 모든 introTitle을 숨김 처리
    gsap.set(titleRefs.current, {
      y: 100, // 아래로 이동
    });

    gsap.set(descriptionRefs.current, {
      width: 0,
      x: -500,
      opacity: 0
    }); 

    // 첫 번째 슬라이드의 제목 활성화 처리
    if (titleRefs.current[0]) {
      gsap.to(titleRefs.current[0], {
        y: 0,
        duration: 1, // 애니메이션 시간
        ease: "power2.out",
      });
    }

    if (descriptionRefs.current[0]) {
      gsap.to(descriptionRefs.current[0], {
        width: '100%',
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    }
    
  }, []);

  const handleSlideChange = (swiper) => {
    // 모든 introTitle 숨기기
    titleRefs.current.forEach((title) => {
      gsap.to(title, {
        y: 100, // 아래로 이동
        duration: 1,
        ease: "power2.out",
      });
    });

    // 현재 슬라이드의 제목 표시
    const activeTitle = titleRefs.current[swiper.realIndex];
    if (activeTitle) {
      gsap.to(activeTitle, {
        y: 0, // 제자리로 이동
        duration: 1,
        ease: "power2.out",
      });
    }

    descriptionRefs.current.forEach((description) => {
      gsap.to(description, {
        width: 0,
        x: -500,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    const activeDescription = descriptionRefs.current[swiper.realIndex];
    if (activeDescription) {
      gsap.to(activeDescription, {
        width: '100%',
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    }
  };

  return (
    <section className={styles.intro}>
      <Swiper
        loop={true}
        speed={1200}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className={`${styles.introSwiper} custom-swiper`}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <video
              src={slide.video}
              autoPlay
              loop
              muted
              aria-label={`Slide ${index + 1}`}
              className="intro-video"
            />
            <div className={styles.introTxt}>
              <div
                className={styles.introTitle}
                ref={(el) => (titleRefs.current[index] = el)} // introTitle ref 저장
              >
                {slide.title}
                <div className={styles.introSubTitle}>{slide.subtitle}</div>
              </div>
              <div 
                className={styles.introDescription}
                ref={(el) => (descriptionRefs.current[index] = el)}
              >{slide.description}</div>
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
