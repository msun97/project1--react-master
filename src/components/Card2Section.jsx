import { brandNews } from "@/data/brandNews";
import { BrandNewsCard } from "@/layout/BrandNewsCard";
import { SocialMediaCard } from "@/layout/SocialMediaCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CardRenderer } from "@/components/CardRenderer";

const Card2Section = () => {
  return (
    <>
    <SectionWrapper
      id="card2-brandnews"
      title="Brands News"
      description="브랜드 공지사항 및 보도자료"
      learnMoreLink="news.html"
    >
      <CardRenderer data={brandNews} Component={BrandNewsCard} className="brandnews-card" />
    </SectionWrapper>
    <SectionWrapper id="card2-sns" title="Social Media">
      <div className="sns-card">
        <SocialMediaCard platform="YouTube">
          <iframe
            className="youtube-iframe"
            src="https://www.youtube.com/embed/d56BXxuyrT8?si=4BnKYBDnqLsf4UmJ"
            title="CLIO Official YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </SocialMediaCard>
        <SocialMediaCard platform="Instagram">
          <div className="sns-instagram-card">
            <a href="#" aria-label="Visit Instagram Card 1">
              <div className="sns-instagram-card1"></div>
            </a>
            <a href="#" aria-label="Visit Instagram Card 2">
              <div className="sns-instagram-card2"></div>
            </a>
          </div>
        </SocialMediaCard>
      </div>
    </SectionWrapper>
  </>
  )
};

export default Card2Section;
