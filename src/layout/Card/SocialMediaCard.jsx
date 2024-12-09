import styles from '../style/SocialMediaCard.module.scss';

export const SocialMediaCard = ({ platform, children }) => (
  <div className={styles[`sns-${platform.toLowerCase()}`]}>
    <div className="sns-title">- {platform}</div>
    {children}
  </div>
);