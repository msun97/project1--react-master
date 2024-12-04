import React from 'react';

const Card3Section = () => {
  const recommendedProducts = [
    {
      imgClass: "img1",
      tag: "[페리페라]",
      title: "[NEW/떡이당컬렉션] 잉크 무드 글로이 틴트 기획 [본품+틴트잼]",
      originalPrice: "8,800",
      salePrice: "11,000",
      salePercentage: "20%"
    },
    {
      imgClass: "img2",
      tag: "[클리오]",
      title: "[NEW/언플러그드보이 에디션] 프로 아이 팔레트 에어",
      originalPrice: "23,800",
      salePrice: "34,300",
      salePercentage: "30%"
    },
    {
      imgClass: "img3",
      tag: "[페리페라]",
      title: "[NEW/떡이당컬렉션] 올테이크 무드 팔레트 기획 [본품+싱글섀도우]",
      originalPrice: "18,400",
      salePrice: "23,000",
      salePercentage: "20%"
    },
    {
      imgClass: "img4",
      tag: "[클리오]",
      title: "[냥생역전 코숏] 킬커버 스킨픽서쿠션 한정기획 [본품+리필+고양이 키링]",
      originalPrice: "27,000",
      salePrice: "36,000",
      salePercentage: "25%"
    }
  ];

  const newProducts = [
    { src: "../resources/images/pattern/seling2.gif", size: "small" },
    { src: "../resources/images/pattern/thing2.gif", size: "small" },
    { src: "../resources/images/pattern/thing3.gif", size: "big" },
    { src: "../resources/images/pattern/thing4.gif", size: "small" },
    { src: "../resources/images/pattern/seling1.gif", size: "big" },
    { src: "../resources/images/pattern/thing5.gif", size: "big" },
    { src: "../resources/images/pattern/thing6.gif", size: "big" },
    { src: "../resources/images/pattern/thing7.gif", size: "small" },
    { src: "../resources/images/pattern/seling3.gif", size: "big" }
  ];

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
            <div key={index} className="comment-item">
              <div className={`img${index + 1}`}></div>
              <div className="txt">
                <div className="tag">{product.tag}</div>
                <div className="comment-title">{product.title}</div>
                <div className="price">
                  <div className="price-origin">{product.originalPrice}</div>
                  <div className="sale">{product.salePrice}</div>
                  <div className="saleper">{product.salePercentage}</div>
                </div>
              </div>
            </div>
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
                <div key={index} className={`swiper-slide ${product.size}`}>
                  <img src={product.src} alt={`New product ${index + 1}`} />
                </div>
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