'use client';

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from "gsap";
import styles from '../css/Brands.module.scss';

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
  const imageRefs = useRef([]); // 이미지 요소에 대한 참조를 저장할 배열

  useEffect(() => {
    // 초기 상태 설정: 이미지 확대
    imageRefs.current.forEach((img) => {
      gsap.set(img, {
        scale: 1.2, // 확대 상태
      });
    });

    // IntersectionObserver 설정
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 이미지가 화면에 보일 때 축소 애니메이션
          gsap.to(entry.target, {
            scale: 1, // 원래 크기로
            duration: 0.5,
            ease: "power3.out",
            onComplete: () => {
              // 애니메이션이 끝난 후 관찰 중지
              observer.unobserve(entry.target);
            },
          });
        }
      });
    }, {
      threshold: 0.5, // 요소가 50% 보일 때 애니메이션 트리거
    });

    // 각 이미지 요소에 observer 적용
    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect(); // 컴포넌트 언마운트 시 observer 정리
  }, []);

  // 마우스 오버 이벤트 핸들러
  const handleMouseEnter = (index) => {
    gsap.to(imageRefs.current[index], {
      scale: 1.2, // 확대
      duration: 0.3,
      ease: "power3.out",
    });
  };

  // 마우스 리브 이벤트 핸들러
  const handleMouseLeave = (index) => {
    gsap.to(imageRefs.current[index], {
      scale: 1, // 원래 크기
      duration: 0.3,
      ease: "power3.out",
    });
  };

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
              <div className={styles.brandsIncard}>
                {/* 이미지에 ref 및 마우스 이벤트 추가 */}
                <div
                  className={`${styles.brandImage} ${brand.className}`}
                  ref={(el) => (imageRefs.current[index] = el)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                ></div>
                <div className={styles.brandName}>{brand.name}</div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
