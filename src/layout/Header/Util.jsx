import React, { useState } from 'react';

export const Util = () => {
  const [language, setLanguage] = useState('KO');

  const handleSearch = () => {
    console.log('Search button clicked');
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    console.log(`Language changed to: ${lang}`);
  };

  const handleLogin = () => {
    console.log('Login button clicked');
  };

  const handleHamburgerClick = () => {
    console.log('Hamburger menu opened');
  };

  return (
    <div className="util">
      <div className="util-etc">
        <button 
          className="search" 
          onClick={handleSearch} 
          aria-label="Search"
        >
          <span className="blind">검색</span>
        </button>
        <div className="lang__btn-group">
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
        </div>
        <button 
          className="login" 
          onClick={handleLogin}
          aria-label="Login"
        >
          로그인
        </button>
      </div>
      <button 
        className="hamburger" 
        onClick={handleHamburgerClick} 
        aria-label="Open menu"
      />
    </div>
  );
};
