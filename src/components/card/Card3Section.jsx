import { newProducts } from '@/data/newProducts';
import { recommendedProducts } from '@/data/recommendedProducts';
import { NewProductCard } from '@/layout/Card/NewProductCard';
import { RecommendedProductCard } from '@/layout/Card/RecommendedProductCard';
import React from 'react';



const Card3Section = () => {
  return (
    <section id="card3">
      <div className="comment">
        <div className="content">
          <div className="title">추천 상품</div>
          <div className="descripte">
            클리오 코스메틱에서 엄선한 추천 상품을 안내해드립니다.
          </div>
        </div>
        <div className="comment-card">
          {recommendedProducts.map((product, index) => (
            <RecommendedProductCard key={index} product={product} />
          ))}
        </div>
        <div className="learn-more">
          <a href="#">Learn more</a>
        </div>
      </div>
      <div className="new">
        <div className="content">
          <div className="title">신상품</div>
          <div className="descripte">
            매일매일 업데이트 되는 클리오 코스메틱만의 제품을 둘러보세요!
          </div>
        </div>
        <div className="slider">
          <div className="swiper new-top-swiper">
            <div className="swiper-wrapper">
              {newProducts.slice(0, 5).map((product, index) => (
                <NewProductCard key={index} product={product} />
              ))}
            </div>
          </div>
          <div className="swiper new-bottop-swiper">
            <div className="swiper-wrapper">
              {newProducts.slice(5).map((product, index) => (
                <div key={index} className={`swiper-slide ${product.size}`}>
                  <img src={product.src} alt={`New product ${index + 6}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="learn-more">
          <a href="#">Learn more</a>
        </div>
      </div>
    </section>
  );
};

export default Card3Section;