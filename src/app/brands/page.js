import Nav from "@/layout/Header/Nav";
import Link from "next/link";
import React from "react";
import styles from "./brands.module.scss"
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import BrandsListItem from "@/components/BrandsListItem";


const page = () => {
 
  return (
   <div className="wrap">
        <div className="brands">
            <div className={styles.lnb}>
                <ul>
                    <Link href="/"><li><AiOutlineHome /></li></Link>
                    <IoIosArrowForward />
                    <li>BRANDS</li>
                    <IoIosArrowForward />
                    <li>Brands</li>
                </ul>
            </div>
        </div>
        <main id="main">
            <section id={styles.brands}>
                <Nav variant="page" />
                <div className={styles.inner}>
                    <div className={styles.innerTop}>
                        <div className={styles.title}>
                            브랜드 소개
                            <div className={styles.border} />
                            <div className={styles.subTitle}>
                                클리오 코스메틱의 다양한 브랜드를 소개합니다.
                            </div>
                        </div>
                    </div>
                    <div className={styles.brandsList}>
                      <BrandsListItem
                        className='clio' 
                        content='클리오는 1993년 국내 최초 탄생한 색조 전문 브랜드입니다. 
                  클리오는 역사와 명예를 상징하는 그리스 신화 뮤즈의 이름이며 TO CELEBRATE라는 그리스 어원으로
                  메이크업을 통해 ‘새로운 나’에 
                  도전하여 자신의 삶의 역사를 멋지게 만드는 여성을 CELEBRATE하기 위해 탄생한 브랜드입니다.
                  클리오의 제품은 혁신적인 품질, 감각적인 컬러, 스타일리시한 
                  디자인으로 누구나 쉽고 간편하게 프로페셔널 메이크업을 가능하게 
                  해줍니다.' />
                      <BrandsListItem
                        className='peripera' 
                        content='Gen Z의 감성을 위트있게 표현하는 패스트 뷰티 브랜드
                  딱 내 감성에 맞는 포인트를 더해
                  일상을 특별하게 보정시켜주는 메이크업 브랜드입니다.' />
                      <BrandsListItem
                        className='goodal' 
                        content='구달은 Good(좋은)+ALL(모든 것)의 합성어로 
                  ‘좋은 모든 것, 모두에게 좋은 것‘을 추구합니다.
                  한국의 제철 원물을 신선하게 fresh catch!
                  구달은 순하지만 피부의 변화가 느껴지는 고기능 클린 스킨케어 솔루션을 지향합니다.' />
                      <BrandsListItem
                        className='dermatory' 
                        content='더마토리는 민감 피부 적합 테스트, 하이포알러제닉 테스트 등
                  다양한 피부 자극 테스트를 기반으로
                  똑똑한 효능을 제공하는 저자극 더마 스킨케어입니다.' />
                      <BrandsListItem
                        className='healingbird' 
                        content='적은 노력으로도 쉽고 빠르게!
                  힐링버드로 초간편한 고기능 헤어, 바디 홈케어를
                  효과적으로 즐겨보세요.' />
                      <BrandsListItem
                        className='ablack' 
                        content='매력적이고 독창적인 컬러 플레이로
                  예상치 못한 즐거움을 선사하는
                  과감한 스타일의 아티스틱 메이크업 브랜드입니다.' />
                      <BrandsListItem
                        className='twinklepop' 
                        content='반짝이 러버들을 위한 영롱함 충전소!
                  본래의 아듬다움에서 더 맑고 빛나는 메이크업을
                  연출해주는 글리터 전문 브랜드 입니다.' />
                    </div>
                </div>
            </section>
        </main>
   </div>
  );
};

export default page;