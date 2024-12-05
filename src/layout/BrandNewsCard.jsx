export const BrandNewsCard = ({ imgClass, tag, content }) => (
  <div className="brandnews-item">
    <div className={`brandnews-item-img ${imgClass}`}></div>
    <div className="brandnews-item-txt">
      <div className="brandnews-item-txt--tag">{tag}</div>
      <div className="brandnews-item-txt--cont">{content}</div>
    </div>
  </div>
);
