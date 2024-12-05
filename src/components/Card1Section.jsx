import { brands } from "@/data/brands";
import { epoCards } from "@/data/epoCards";
import { BrandCard } from "@/layout/BrandCard";
import { EpoCard } from "@/layout/EpoCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CardRenderer } from "@/components/CardRenderer";

const Card1Section = () => {
  return(
    <>
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
  </>
  )
};

export default Card1Section;
