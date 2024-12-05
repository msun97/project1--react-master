import { brands } from "@/data/brands";
import { epoCards } from "@/data/epoCards";
import { BrandCard } from "@/layout/Card/BrandCard";
import { EpoCard } from "@/layout/Card/EpoCard";
import { SectionWrapper } from "@/components/card/SectionWrapper";
import { CardRenderer } from "@/components/card/CardRenderer";

import styles from "../css/Card1.module.scss";

const Card1Section = () => {
  return(
    <section id="card1" className={styles.Card1Section}>
    <SectionWrapper
      id="card1-epo"
      title="Every Pouch One CLIO"
      description="클리오는 화장품을 통해 새로운 변화를 즐기는 사람에게 자신감과 즐거움을 제공합니다"
      learnMoreLink="/vision"
    >
      <CardRenderer data={epoCards} Component={EpoCard} className="epo-card" />
    </SectionWrapper>
    <SectionWrapper id="card1-brands" title="Brands" learnMoreLink="#">
      <CardRenderer data={brands} Component={BrandCard} className="brands-card" />
    </SectionWrapper>
  </section>
  )
};

export default Card1Section;
