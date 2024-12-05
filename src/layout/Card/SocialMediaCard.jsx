
   export const SocialMediaCard = ({ platform, children }) => (
    <div className={`sns-${platform.toLowerCase()}`}>
      <div className="sns-title">- {platform}</div>
      {children}
    </div>
  );
