export const NewProductCard = ({product, index}) => (
  <div key={index} className={`swiper-slide ${product.size}`}>
    <img src={product.src} alt={`New product ${index + 1}`} />
  </div>
);