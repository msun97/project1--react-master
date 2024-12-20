'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

import styles from '../style/Nav.module.scss';

const SubMenu = ({ subMenu, gnbdepth2, isActive, isHeaderNav }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      gsap.to(`.${styles.navAllList}`, {
        y: scrollY > 0 ? -20 : 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <ul
      className={`${
        isActive ? styles.activeDepth2 : ''
      } ${isHeaderNav ? styles.gnbDepth2 : styles.navAlldepth2}`}
    >
      {subMenu.map((subItem, subIndex) => (
        <li key={subIndex}>
          <Link href={subItem.link}>{subItem.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export const NavItem = ({
  index,
  item,
  gnbdepth2,
  activeIndex,
  setActiveIndex,
  isHeaderNav,
}) => {
  const isActive = activeIndex === index;
  const handleClick = () => {
    setActiveIndex(isActive ? null : index);
  };

  return (
    <li>
      <div
        onClick={handleClick}
        className={isActive ? styles.active : ''}
        style={{ cursor: 'pointer' }}
      >
        <Link href={item.link}>
          <span>{item.title}</span>
        </Link>
      </div>
      {item.subMenu && (
        <SubMenu
          subMenu={item.subMenu}
          gnbdepth2={gnbdepth2}
          isActive={isActive}
          isHeaderNav={isHeaderNav}
        />
      )}
    </li>
  );
};
