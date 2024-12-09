
import { SocialMediaCard } from "@/layout/Card/SocialMediaCard";
import { SectionWrapper } from "@/components/card/SectionWrapper";
import styles from "../css/Card2.module.scss"
import BrandNewsCard from "./BrandNewsCard";


const Card2Section = () => {
  return (
    <section id="card2" className={styles.Card2Section}>
      <SectionWrapper
      id={styles.brandNews}
      title="Brands News"
      description="브랜드 공지사항 및 보도자료"
      learnMoreLink="news.html"
      >
        <BrandNewsCard />
      </SectionWrapper>
      <SectionWrapper id={styles.sns} title="Social Media">
        <div className={styles.snsCard}>
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
          <div className={styles.snsInstagramCard}>
            <a href="#" aria-label="Visit Instagram Card 1">
              <div className={`${styles.snsInstagramCardInner}sns-instagram-card1`}></div>
            </a>
            <a href="#" aria-label="Visit Instagram Card 2">
              <div className="sns-instagram-card2"></div>
            </a>
          </div>
        </SocialMediaCard>
        </div>
      </SectionWrapper>
  </section>
  )
};

export default Card2Section;
