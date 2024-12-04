import React from 'react';

const Card2Section = () => {
  const brandNews = [
    {
      imgClass: "brandnews-item1-img",
      tag: "[구달]",
      content: "(24.02.21) '맑은 어성초 진정 수분 톤업 선크림' 런칭 기념 올리브영 1+1 기획세트 출시."
    },
    {
      imgClass: "brandnews-item2-img",
      tag: "[더마토리]",
      content: "(24.02.21) 효능주의 더마 브랜드 더마토리, 새 얼굴로 도경수 모델 발탁."
    },
    {
      imgClass: "brandnews-item3-img",
      tag: "[페리페라]",
      content: "(24.02.21) 페리페라, NCT 도영&정우 모델 발탁."
    }
  ];

  return (
    <section id="card2">
      <div className="brandnews">
        <div className="content">
          <div className="title">Brands News</div>
          <div className="descripte">브랜드 공지사항 및 보도자료</div>
        </div>
        <div className="brandnews-card">
          {brandNews.map((news, index) => (
            <div key={index} className="brandnews-item">
              <div className={`brandnews-item-img ${news.imgClass}`}></div>
              <div className="brandnews-item-txt">
                <div className="brandnews-item-txt--tag">{news.tag}</div>
                <div className="brandnews-item-txt--cont">{news.content}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="learn-more">
          <a href="news.html">Learn more</a>
        </div>
      </div>
      <div className="sns">
        <div className="content">
          <div className="title">Social Media</div>
        </div>
        <div className="sns-card">
          <div className="sns-youtube">
            - Youtube
            <iframe 
              className="youtube-iframe" 
              src="https://www.youtube.com/embed/d56BXxuyrT8?si=4BnKYBDnqLsf4UmJ" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="sns-instagram">
            - Instagram
            <div className="sns-instagram-card">
              <a href="#">
                <div className="sns-instagram-card1"></div>
              </a>
              <a href="#">
                <div className="sns-instagram-card2"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card2Section;