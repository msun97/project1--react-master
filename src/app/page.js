import React from "react";
import Nav from "@/components/Nav";
import IntroSection from "@/components/IntroSection";
import Card1Section from "@/components/Card1Section";
import Card2Section from "@/components/Card2Section";
import Card3Section from "@/components/Card3Section";


export default function Home() {
  return (
    <main>
      <IntroSection />
      <Nav />
      <Card1Section />
      <Card2Section />
      <Card3Section />
    </main>
  );
}
