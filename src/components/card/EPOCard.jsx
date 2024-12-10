'use client'
import { epoCards } from "@/data/epoCards";
import React, { useEffect, useRef } from "react";
import styles from "../css/EpoCard.module.scss";
import gsap from "gsap";

export const EPOCard = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    // 초기 상태 설정: 모든 카드를 왼쪽으로 숨김
    cardRefs.current.forEach((card) => {
      if (!card) return;

      // 초기 상태 설정
      gsap.set(card, {
        x: -100,
        opacity: 0
      });

      const frontSide = card.querySelector(`.${styles.frontSide}`);
      const backSide = card.querySelector(`.${styles.backSide}`);

      // 뒷면 초기 상태 설정
      gsap.set(backSide, {
        rotationY: -180
      });

      // 마우스 오버 이벤트
      card.addEventListener('mouseenter', () => {
        gsap.to(frontSide, {
          rotationY: 180,
          duration: 0.8,
          ease: "power2.inOut"
        });
        gsap.to(backSide, {
          rotationY: 0,
          duration: 0.8,
          ease: "power2.inOut"
        });
      });

      // 마우스 아웃 이벤트
      card.addEventListener('mouseleave', () => {
        gsap.to(frontSide, {
          rotationY: 0,
          duration: 0.8,
          ease: "power2.inOut"
        });
        gsap.to(backSide, {
          rotationY: -180,
          duration: 0.8,
          ease: "power2.inOut"
        });
      });
    });

    // IntersectionObserver 설정
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 요소가 화면에 보이면 애니메이션 실행
          gsap.to(entry.target, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    // 각 카드 요소를 관찰 대상으로 등록
    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.epoCard}>
      {epoCards.map((card, index) => (
        <div 
          key={index} 
          className={`${styles.epoCardItem} ${card.cardClass}`}
          ref={el => cardRefs.current[index] = el}
        >
          {/* 앞면 */}
          <div className={styles.frontSide}>
            <div className={card.bgClass}></div>
            <div className={styles.txt}>
              <div className={styles.txtKo}>{card.koText}</div>
              <div className={styles.txtEn}>{card.enText}</div>
            </div>
          </div>
          {/* 뒷면 */}
          <div className={styles.backSide}>
            <div className={styles.txt}>
              <div className={styles.txtKoback}>{card.koTextback}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};