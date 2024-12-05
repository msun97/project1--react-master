export const SectionWrapper = ({ id, title, description, children, learnMoreLink }) => (
  <section id={id}>
    <div className="content">
      <div className="title">{title}</div>
      {description && <div className="descripte">{description}</div>}
    </div>
    {children}
    {learnMoreLink && (
      <div className="learn-more">
        <a href={learnMoreLink}>Learn more</a>
      </div>
    )}
  </section>
);

