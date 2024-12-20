import { SectionWrapper } from "@/components/card/SectionWrapper";
import { EPOCard } from "@/components/card/EPOCard";
import Brands from "./Brands";

import styles from "../css/Card1.module.scss";


const Card1Section = () => {
  return(
    <section id="card1" className={styles.Card1Section}>
    <SectionWrapper
      id={styles.cardEpo}
      title="Every Pouch One CLIO"
      subTitle='항상 새로운 가치를 추구하며 열린 마음으로 창의적인 사고를'
      years="2024 클리오"
      description="클리오는 화장품을 통해 새로운 변화를 즐기는 사람에게 자신감과 즐거움을 제공합니다"
      learnMoreLink="/vision"
    >
      <EPOCard />
    </SectionWrapper>
    <SectionWrapper
      id={`${styles.brands}`}
      ContentclassName={styles.content}
      title="Brands"
      learnMoreLink="/brands"
    >
      <Brands />
    </SectionWrapper>
  </section>
  )
};

export default Card1Section;
