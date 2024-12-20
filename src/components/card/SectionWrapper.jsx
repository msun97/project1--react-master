import React, { useEffect, useRef } from 'react';
import styles from "../css/SectionWrapper.module.scss";
import LearnMore from "../LearnMore";
import { gsap } from "gsap";

export const SectionWrapper = ({ id, title, subTitle, years, description, children, ContentclassName, learnMoreLink}) => {
  const subtitleRef = useRef(null);

  useEffect(() => {
    const subtitle = subtitleRef.current;
    if (!subtitle) return;

    // 각 글자를 span 태그로 감싸는 처리
    const words = subtitle.innerText.split('');
    subtitle.innerHTML = words.map(word => `<span className="${styles.letter}">${word}</span>`).join('');
    const letterElements = subtitle.querySelectorAll(`.${styles.letter}`);
    
    // IntersectionObserver로 스크롤 시 opacity 변경
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(letterElements, {
            opacity: 1,
            stagger: 0.1,
            duration: 2,
            ease: "power2.out",
          });
        } else {
          gsap.to(letterElements, {
            opacity: 0.4,
            duration: 1,
            ease: "power2.in",
          });
        }
      });
    }, { threshold: 0.5 });

    observer.observe(subtitle);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.wrap}>
    <section id={id}>
      <div className={ContentclassName ? ContentclassName : styles.content}>
        <div className={styles.years}>{years ? years : ''}</div>
        <div className={styles.subTitle} >
          {subTitle}
        </div>
        <div className={styles.title} ref={subtitleRef}>{title}</div>
        {description && <div className={styles.descripte}>{description}</div>}
      </div>
      {children}
    </section>
    <LearnMore learnMoreLink={learnMoreLink}></LearnMore>      
    </div>
  );
};
