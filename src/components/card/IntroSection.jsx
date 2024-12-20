'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


import styles from "../css/Intro.module.scss";


const IntroSwiper = () => {

  return (
    <section id={styles.intro}>
      <Swiper 
        pagination={true} 
        modules={[Pagination, Autoplay]} 
        lassName={styles.IntroSwiper}
        speed={600}
        spaceBetween={30}
        parallax={true}
        effect="fade"
        loop={true}
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        <SwiperSlide className={styles.introSwiperSlide}>
          <video src="\images\pattern\pc_main_visual1.mp4" autoPlay loop muted>
          </video>
          <div className={styles.txt}>
              <div className={styles.title} data-swiper-parallax="-300">
                Global market leader
                <div className={`${styles.title} ${styles.title2}`} data-swiper-parallax="-300">CLIO COSMETICS</div>
              </div>
              <div className={styles.subtitle} data-swiper-parallax="-200">새로운 변화를 즐기는 사람에게 자신감과 즐거움을.</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.introSwiperSlide}>
          <video src="\images\pattern\pc_main_visual2.mp4" autoPlay loop muted>
          </video>
          <div className={styles.txt}>
              <div className={styles.title} data-swiper-parallax="-300">
                PEOPLE & FOREST
                  <div className={`${styles.title} ${styles.title2}`} data-swiper-parallax="-300">Comunication</div>
                </div>
                <div className={styles.subtitle} data-swiper-parallax="-200">배려와 존중을 기반으로, 사람과 지역사회와 함께 소통하고 성장하는.</div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={styles.introSwiperSlide}>
          <video src="\images\pattern\pc_main_visual3.mp4" autoPlay loop muted>

          </video>
          <div className={styles.txt}>
              <div className={styles.title} data-swiper-parallax="-300">
                CREATE & CULTURE
                <div className={`${styles.title} ${styles.title2}`} data-swiper-parallax="-300">Social Responsibility</div>
              </div>
              <div className={styles.subtitle} data-swiper-parallax="-200">사회에도 선한 영향력이 발휘될 수 있도록 즐거움을 전파하고 온기를 나눕니다.</div>
            </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.scroll}>
          <div className="scroll-txt">SCROLL</div>
      </div>
    </section>
  );
};

export default IntroSwiper;
