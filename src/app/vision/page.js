import Nav from "@/layout/Header/Nav";
import Link from "next/link";
import React from "react";
import styles from "./vision.module.scss"
import MissionList from "@/components/MissionList";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";


const page = () => {
 
  return (
   <div className="wrap">
        <div className="vision">
            <div className={styles.lnb}>
                <ul>
                    <Link href="/"><li><AiOutlineHome /></li></Link>
                    <IoIosArrowForward />
                    <li>ABOUT US</li>
                    <IoIosArrowForward />
                    <li>경영이념/비전</li>
                </ul>
            </div>
        </div>
        <main id="main">
            <section id={styles.vision}>
                <Nav variant="page" />
                <div className={styles.inner}>
                    <div className={styles.innerTop}>
                        <div className={styles.title}>
                            <div className={styles.subTitle}>
                                Clio Vision
                            </div>
                            클리오는 화장품을 통하여 <br />새로운 변화를 즐기는 사람에게 자신감과 즐거움을 제공하기 위하여 존재합니다.
                        </div>
                    </div>
                    <div className={styles.missionList}>
                        <MissionList className={'challenge'} title={'변하자(Challenge)'} content={
                            `클리오는 항상 새로운 가치를 추구하며 최상의 성과를 내기 위해 효율적으로 일합니다.
                            보완이 필요없는 야무진 일처리를 합니다.`
                        } />
                        <MissionList className={'connection'} title={'통하자(Connection)'} content={
                            `상대방 말을 주의 깊게 듣고 핵심을 파악하며 
                            타 부서 업무도 ‘우리 일’이라는 생각으로 협의·협력 하고자 합니다. 올바른 예의를 다하고 상대를 배려합니다.`
                        } />
                        <MissionList className={'enjoyment'} title={'즐기자(Enjoyment)'} content={
                            `작은 성과도 칭찬·격려하고 긍정적인 말투로 대화합니다. 
                            클리오는 끈끈한 동료애를 바탕으로 함께합니다.`
                        } />
                    </div>
                    <div className={styles.border}>
                        <div className={styles.borderLine}></div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.BsubTitle}>항상 새로운 가치를 추구하며 열린 마음으로 창의적인 사고를</div>
                        <div className={styles.Btitle}>Every Pouch One CLIO</div>
                    </div>
                </div>
            </section>
        </main>
   </div>
  );
};

export default page;