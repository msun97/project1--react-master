import Link from "next/link";

const Card1Section = () => {
  const epoCrads = [
    {
      bgClass: "epo-card1-bg",
      txtKo: "변하자",
      txtEn: "(CHALLENGE)"
    },
    {
      bgClass: "epo-card2-bg",
      txtKo: "통하자",
      txtEn: "(CONNECTION)"
    },
    {
      bgClass: "epo-card3-bg",
      txtKo: "즐기자",
      txtEn: "(ENJOYMENT)"
    }
  ];

  const brands = [
    { name: "CLIO PROFESSIONAL", className: "clio" },
    { name: "Peripera", className: "peripera" },
    { name: "goodal", className: "goodal" },
    { name: "DERMATORY", className: "dermatory" },
    { name: "HealingBird", className: "healingbird" },
    { name: "A.BLACK", className: "ablack" },
    { name: "TWINKLEPOP", className: "twinklepop" }
  ];

  return (
    <section id="card1">
      <div className="epo">
        <div className="content">
          <div className="years">2024 클리오</div>
          <div className="sub-title">
            항상 새로운 가치를 추구하며 열린 마음으로 창의적인 사고를
          </div>
          <div className="title">
            Every Pouch One CLIO
          </div>
          <div className="descripte">
            클리오는 화장품을 통해 새로운 변화를 즐기는 사람에게 자신감과 즐거움을 제공합니다
          </div>
        </div>
        <div className="epo-card">
          {epoCrads.map((card, index) => (
            <div key={index} className={`epo-card-item epo-card${index + 1}`}>
              <div className={card.bgClass}></div>
              <div className="txt">
                <div className="txt-ko">{card.txtKo}</div>
                <div className="txt-en">{card.txtEn}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="learn-more">
          <Link href="/vision">Learn more</Link>
        </div>
      </div>
      <div className="brands">
        <div className="content">
          <div className="title">Brands</div>
        </div>
        <div className="brands-card">
          <div className="swiper brandswiper">
            <div className="swiper-wrapper">
              {brands.map((brand, index) => (
                <div key={index} className="swiper-slide">
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
    </section>
  );
};

export default Card1Section;