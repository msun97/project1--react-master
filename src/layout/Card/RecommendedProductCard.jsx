export const RecommendedProductCard = ({product}) => {
  // product나 product.imgClass가 undefined일 경우 대비
  if (!product) return null;

  return (
    <div className="comment-item">
      {product.imgClass && <div className={`product-img ${product.imgClass}`}></div>}
      <div className="txt">
        <div className="tag">{product.tag}</div>
        <div className="comment-title">{product.title}</div>
        <div className="price">
          <div className="price-origin">{product.originalPrice}원</div>
          <div className="sale">{product.salePrice}원</div>
          <div className="saleper">{product.salePercentage}</div>
        </div>
      </div>
    </div>
  );
};