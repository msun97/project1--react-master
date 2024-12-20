import { newProducts } from '@/data/newProducts';
import { recommendedProducts } from '@/data/recommendedProducts';
import { RecommendedProductCard } from '@/layout/Card/RecommendedProductCard';
import React from 'react';

import styles from "../css/Card3.module.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';
import LearnMore from '../LearnMore';



const Card3Section = () => {
  return (
    <section id={styles.card3}>
      <div className={styles.comment}>
        <div className={styles.content}>
          <div className={styles.title}>추천 상품</div>
          <div className={styles.descripte}>
            클리오 코스메틱에서 엄선한 추천 상품을 안내해드립니다.
          </div>
        </div>
        <div className={styles.commentCard}>
          {recommendedProducts.map((product, index) => (
            <RecommendedProductCard key={index} product={product} />
          ))}
        </div>
        <LearnMore />
      </div>
      <div className={styles.new}>
        <div className={styles.newContent}>
          <div className={styles.title}>신상품</div>
          <div className={styles.descripte}>
            매일매일 업데이트 되는 클리오 코스메틱만의 제품을 둘러보세요!
          </div>
        </div>
        <div className={styles.slider}>
          <Swiper 
            className={styles.topSwiper}
            modules={[Autoplay]} 
            slidesPerView="auto"
            spaceBetween={16}
            loop={true}
            speed={4500}
            autoplay={{ delay: 0 }}
          >
            {newProducts.slice(5).map((product, index) => (
                <SwiperSlide 
                  key={index} 
                  className={`${styles[product.size]} ${styles.topSlide}`}
                >
                  <img src={product.src} alt={`New product ${index + 6}`} />
                </SwiperSlide>
              ))}
          </Swiper>
          <Swiper 
            className={styles.bottomSwiper}
            slidesPerView="auto"
            modules={[Autoplay]} 
            spaceBetween={16}
            loop={true}
            speed={6000}
            autoplay={{ delay: 0}}
          >
            {newProducts.slice(0, 5).map((product, index) => (
                <SwiperSlide 
                  key={index} 
                  className={`${styles[product.size]} ${styles.bottomSlide}`}
                >
                  <img src={product.src} alt={`New product ${index + 1}`} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <LearnMore />
      </div>

    </section>
  );
};

export default Card3Section;