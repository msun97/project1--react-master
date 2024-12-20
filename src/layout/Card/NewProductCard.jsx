export const NewProductCard = ({product, index}) => (
    <img key={index} src={product.src} alt={`New product ${index + 1}`} />
);