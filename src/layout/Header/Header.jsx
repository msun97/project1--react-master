'use client';

import Nav from '@/layout/Header/Nav';
import { Util } from '@/layout/Header/Util';
import Search from '@/layout/Header/Search';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useNavContext } from './NavProvider';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import styles from '../style/Header.module.scss';
import gsap from 'gsap';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const headerRef = useRef(null);
  const { isNavAllOpen, toggleNavAll, closeNavAll } = useNavContext();
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsActive(window.scrollY > 1);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      {y: -100},
      {y: 0, ease: 'Power3.easeInOut', duration: 0.75}
    );
  }, []);

  useEffect(() => {
    if (isNavAllOpen) {
      closeNavAll();
    }
  }, [pathname]);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => setIsSearchOpen((prev => !prev));
  const closeSearch = () => setIsSearchOpen(false);


  return (
    <header
      ref={headerRef}
      id={styles.header}
      className={classNames(styles.header, {
        [styles.active]: isActive,
        [styles.navAll]: isNavAllOpen,
      })}
    >
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <Link className={styles.logoLink} href="/">
            <span>CLIO COSMETIC</span>
          </Link>
        </h1>
        <Nav variant="header" />
        <Util
          onHamburgerClick={toggleNavAll}
          utiletc={styles.utilEtc}
          hamburger={styles.hamburger}
          onSearchClick={toggleSearch}
          isNavOpen={isNavAllOpen}
        />
        <Search isActive={isSearchOpen} onClose={closeSearch}/>
      </div>
    </header>
  );
};

export default Header;
