
import React, { useState } from 'react';
import styles from '../style/Utils.module.scss';
import { IoSearch } from "react-icons/io5";
import { IoMdClose, IoMdMenu } from 'react-icons/io';

export const Util = ({ onHamburgerClick , utiletc,hamburger, onSearchClick, isNavOpen}) => {
  const [language, setLanguage] = useState('KO');


  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    console.log(`Language changed to: ${lang}`);
  };

  const handleLogin = () => {
    console.log('Login button clicked');
  };

  return (
    <div className={styles.util}>
      <div className={`${utiletc} ${styles.utilEtc}`}>
        <div 
          className={styles.search}
          onClick={onSearchClick} 
          aria-label="Search"
        > 
        <IoSearch />
        <span className="blind">검색</span>
        </div>
          {['KO', 'EN'].map((lang) => (
            <button
              key={lang}
              className={`lang__btn ${language === lang ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang)}
              aria-label={`Change language to ${lang}`}
            >
              {lang}
            </button>
          ))}
        <button 
          className="login" 
          onClick={handleLogin}
          aria-label="Login"
        >
          Login
        </button>
      </div>
      <button 
        className={`${hamburger} ${styles.hamburger} `}
        onClick={onHamburgerClick} 
        aria-label="Open menu"
      >
        {isNavOpen ? <IoMdClose /> : <IoMdMenu />}
        <span className="blind">메뉴</span>
      </button>
    </div>
  );
};