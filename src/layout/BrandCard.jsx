export const BrandCard =({name, className}) => (
  <div className='swiper-slide'>
    <a href="#">
      <div className={`brandnews-incard ${className}`}>
        {name}
      </div>
    </a>
  </div>
)
