import React from 'react';
import styles from './style/Footer.module.scss'

import { FaFacebook, FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from 'react-icons/io';

const Footer = () => {
  return (
    <footer id={styles.footer}>
        <div className={styles.footerTop}>
            <div className={styles.inner}>
                <div className={styles.sns}>
                    <a href="#" className='instagram'>
                        <FaInstagram />
                    </a>
                    <a href="#" className='youtube'>
                        <IoLogoYoutube />
                    </a>
                    <a href="#" className='facebook'>
                        <FaFacebookF />
                    </a>
                    <a href="#" className='tiktok'>
                        <FaTiktok />
                    </a>
                    <a href="#" className='twitter'>
                        <FaXTwitter />
                    </a>
                </div>
                <div className={styles.footerTopRight}>
                    개인정보취급방침
                </div>
            </div>
        </div>
        <div className={styles.footerBottom}>
            <div className={styles.footerInfo}>
                <h2 className={styles.name}>(주)클리오</h2>
                <div className={styles.adress}>
                    <p>서울특별시 성동구 왕십리로 66</p>
                    <p>clioir@clio.co.kr</p>
                </div>
                <div className={styles.rights}>
                    ⓒ Since 1996 CLIO COSMETICS, All Rights Reserved.
                </div>
            </div>
            <h2 className={styles.logo}></h2>
        </div>
    </footer>
  );
};

export default Footer;
