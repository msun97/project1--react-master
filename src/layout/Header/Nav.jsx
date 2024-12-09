'use client';

import React, { useState } from 'react';
import navData from '@/data/nav';
import { NavItem } from './NavItem';
import styles from '../style/Nav.module.scss';
import { useNavContext } from './NavProvider';

const Nav = ({ variant = 'default' }) => {
  const { isNavAllOpen } = useNavContext();
  const isHeaderNav = variant === 'header'; // Header용 스타일인지 확인
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <nav
      id="gnb"
      className={`${isHeaderNav ? styles.gnb : styles.navAll} ${
        !isHeaderNav && isNavAllOpen ? styles.active : ''
      }`}
    >
      <ul className={isHeaderNav ? styles.gnb__depth1 : ''}>
        {navData.map((item, index) => (
          <NavItem
            key={index}
            item={item}
            gnbdepth2={styles.gnb__depth2}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            isHeaderNav={isHeaderNav}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
