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
    // IntroSection 고정
    ScrollTrigger.create({
      trigger: ".intro-section",
      start: "top top",
      end: "bottom -100%",
      pin: true,
    });

    // card1 올라오는 애니메이션
    gsap.fromTo(".card1-section",
      {
        y: "-953px",
      },
      {
        y: "0px",
        scrollTrigger: {
          trigger: ".intro-section",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          invalidateOnRefresh: true,
        }
      }
    );

    ScrollTrigger.create({
      trigger: ".card1-section",
      start: "center center", // 화면 중앙에 왔을 때 고정 시작
      end: "+=100%", // 스크롤을 한 화면 높이만큼 더 했을 때 고정 해제
      pin: true,
      pinSpacing: true,
    });

    // Card2Section 애니메이션
    gsap.fromTo(".card2-section",
      {
        y: "100vh",
      },
      {
        y: "0",
        scrollTrigger: {
          trigger: ".card1-section",
          start: "center center", // Card1Section이 고정되는 시점과 동일하게
          end: "+=100%",
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
      </div>
      <Card3Section />
    </main>
  );
}