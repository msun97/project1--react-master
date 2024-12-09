import styles from "../css/SectionWrapper.module.scss";
import LearnMore from "../LearnMore";

export const SectionWrapper = ({ id, title, subTitle, years, description, children, ContentclassName, learnMoreLink}) => (
  <section id={id}>
    <div className={ContentclassName?ContentclassName:styles.content}>
      <div className={styles.years}>{years?years:''}</div>
      <div className={styles.subTitle}>{subTitle}</div>
      <div className={styles.title}>{title}</div>
      {description && <div className={styles.descripte}>{description}</div>}
    </div>
    {children}
    <LearnMore learnMoreLink={learnMoreLink}></LearnMore>
  </section>
);

