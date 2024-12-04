// components/Brands.js
import React from 'react';

const brands = [
  { name: "CLIO PROFESSIONAL", className: "clio" },
  { name: "Peripera", className: "peripera" },
  { name: "goodal", className: "goodal" },
  { name: "DERMATORY", className: "dermatory" },
  { name: "HealingBird", className: "healingbird" },
  { name: "A.BLACK", className: "ablack" },
  { name: "TWINKLEPOP", className: "twinklepop" },
];

const Brands = () => {
  return (
    <div className="brands">
      <div className="content">
        <div className="title">Brands</div>
      </div>
      <div className="brands-card">
        <div className="swiper brandswiper">
          <div className="swiper-wrapper">
            {brands.map((brand, index) => (
              <div className="swiper-slide" key={index}>
                <a href="#">
                  <div className={`brands-incard ${brand.className}`}>
                    {brand.name}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="learn-more">
        <a href="#">Learn more</a>
      </div>
    </div>
  );
};

export default Brands;
