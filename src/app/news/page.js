import Nav from "@/layout/Header/Nav";
import Link from "next/link";
import React from "react";
import styles from "./news.module.scss"
import NewsButton from "@/components/NewsButton";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward, IoMdSearch } from "react-icons/io";
import NewsListInner from "@/components/NewsListInner";
import { sampleNewsData } from "@/data/sampleNewsData";
import BtnNum from "@/components/BtnNum";
import { AiOutlineHome } from "react-icons/ai";

const page = () => {
 
  return (
   <div className="wrap">
        <div className="news">
            <div className={styles.blnb}>
                <ul>
                    <Link href="/"><li><AiOutlineHome /></li></Link>
                    <IoIosArrowForward />
                    <li>BRANDS</li>
                    <IoIosArrowForward />
                    <li>Brand 뉴스</li>
                </ul>
            </div>
        </div>
        <main id="main">
            <section id="news">
                <Nav variant="page" />
                <div className="inner">
                    <div className={styles.innerTop}>
                        <div className={styles.title}>
                            <div className={styles.subTitle}>
                                Notice
                            </div>
                            공지사항
                        </div>
                    </div>
                    <div className={styles.newsContent}>
                        <div className={styles.newsCategory}>
                            <div className={styles.newsCategoryWrap}>
                                <NewsButton>전체</NewsButton>
                                <NewsButton>클리오</NewsButton>
                                <NewsButton>페리페라</NewsButton>
                                <NewsButton>구달</NewsButton>
                                <NewsButton>더마토리</NewsButton>
                                <NewsButton>힐링버드</NewsButton>
                                <NewsButton>에이블랙</NewsButton>
                                <NewsButton>트윙클팝</NewsButton>
                            </div>
                        </div>
                        <div className={styles.newsSearch}>
                            <div className="news-search--category-selected">
                                <button className={styles.selected}>
                                    전체
                                    <MdArrowDropDown />
                                </button>
                            </div>
                            <div className={styles.newsSearchCategory}>
                                <button>클리오</button>
                                <button>페리페라</button>
                                <button>구달</button>
                                <button>더마토리</button>
                                <button>힐링버드</button>
                                <button>에이블랙</button>
                                <button>트윙클팝</button>
                            </div>
                            <div className={styles.serachNotiveTab}>
                                <input type="text" className={styles.serachNotice} value="검색어를 입력해주세요." />
                                <button className={styles.searchBtn}>
                                    <IoMdSearch />
                                </button>
                            </div>
                        </div>
                        <div className={styles.newsList}>
                            <div className={styles.newsListMenu}>
                                <div className={styles.num}>No.</div>
                                <div className={styles.category}>분류</div>
                                <div className={styles.tlt}>
                                  <div className="cont">
                                    제목
                                  </div>
                                </div>
                                <div className={styles.data}>작성일</div>
                                <div className={styles.see}>조회</div>
                            </div>
                            <NewsListInner newsData={sampleNewsData} />
                        </div>
                        <div className={styles.pageMove}>
                            <button className="prev">
                                <IoIosArrowBack />
                            </button>
                            <div className={styles.btnNum}>
                                <BtnNum className={styles.active}>1</BtnNum>
                                <BtnNum className=''>2</BtnNum>
                            </div>
                            <button className="next">
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
   </div>
  );
};

export default page;