import React from "react";
import Nav from "@/layout/Header/Nav";
import IntroSection from "@/components/card/IntroSection";
import Card1Section from "@/components/card/Card1Section";
import Card2Section from "@/components/card/Card2Section";
import Card3Section from "@/components/card/Card3Section";


export default function Home() {
  return (
    <main>
      <Nav variant="page" />
      <IntroSection />
      <Card1Section />
      <Card2Section />
      <Card3Section />
    </main>
  );
}
