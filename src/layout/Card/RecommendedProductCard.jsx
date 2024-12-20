import styles from '../style/RecommendedProductCard.module.scss';

export const RecommendedProductCard = ({product}) => {
  // product나 product.imgClass가 undefined일 경우 대비
  if (!product) return null;

  return (
    <div className={styles.commentItem}>
      {product.imgClass && <div className={`${styles.recommendedProductImgBig} ${product.imgClass}`}></div>}
      <div className={styles.txt}>
        <div className={styles.tag}>{product.tag}</div>
        <div className={styles.commentTitle}>{product.title}</div>
        <div className={styles.price}>
          <div className="price-origin">{product.originalPrice}원</div>
          <div className={styles.sale}>{product.salePrice}원</div>
          <div className={styles.saleper}>{product.salePercentage}</div>
        </div>
      </div>
    </div>
  );
};