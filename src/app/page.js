'use client'
import React, { useEffect } from "react";
import Nav from "@/layout/Header/Nav";
import IntroSection from "@/components/card/IntroSection";
import Card1Section from "@/components/card/Card1Section";
import Card2Section from "@/components/card/Card2Section";
import Card3Section from "@/components/card/Card3Section";
import gsap from "gsap";
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    // IntroSection 고정
    ScrollTrigger.create({
      trigger: ".intro-section",
      start: "top top",
      end: "bottom",
      pin: true,
    });

    // card1 올라오는 애니메이션
    if (isMobile) {
      gsap.fromTo(".card1-section",
        {
          y: "-803px",
        },
        {
          y: "-400px",
          scrollTrigger: {
            trigger: ".intro-section",
            start: "top bottom",
            end: "top top",
            scrub: 1,
            invalidateOnRefresh: true,
          }
        }
      );
    } else {
    gsap.fromTo(".card1-section",
      {
        y: "-953px",
      },
      {
        y: "-400px",
        scrollTrigger: {
          trigger: ".intro-section",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          invalidateOnRefresh: true,
        }
      }
    );
  }

    // Card1Section 하단부 고정
    ScrollTrigger.create({
      trigger: ".card1-section",
      start: "bottom bottom+=10%",
      endTrigger: ".card2-section",
      end: "top top",
      pin: "true",
    });

    // Card2Section 올라오는 애니메이션
    if (isMobile) {
      gsap.fromTo(".card2-section",
        {
          y: "-300px",
        },
        {
          y: "-600px",
          scrollTrigger: {
            trigger: ".card1-section",
            start: "bottom bottom+=10%",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          }
        }
      );
    } else {
    gsap.fromTo(".card2-section",
      {
        y: "-400px",
      },
      {
        y: "-600px",
        scrollTrigger: {
          trigger: ".card1-section",
          start: "bottom bottom+=10%",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        }
      }
    );
  }
    

    ScrollTrigger.create({
      trigger: ".card2-section",
      start: "bottom bottom+=10%",
      endTrigger: ".card3-section",
      end: "top top",
      pin: "true",
    });

    // Card2Section 올라오는 애니메이션
    gsap.fromTo(".card3-section",
      {
        y: "-500px",
      },
      {
        y: "-1200px",
        scrollTrigger: {
          trigger: ".card2-section",
          start: "bottom bottom+=30%",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        }
      }
    );


    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);
  return (
    <main style={{ position: 'relative', overflow: 'hidden' }}>
      <Nav variant="page" />
      <div className="scroll-section">
        <section className="intro-section">
          <IntroSection />
        </section>
        <section className="card1-section">
          <Card1Section />
        </section>
        <section className="card2-section">
          <Card2Section />
        </section>
        <section className="card3-section">
          <Card3Section />
        </section>
      </div>
    </main>
  );
}