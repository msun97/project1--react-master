'use client'

import React, { useState } from 'react';
import Link from 'next/link';

import styles from '../style/Nav.module.scss'

const SubMenu = ({ subMenu, gnbdepth2, isActive, isHeaderNav }) => (
  <ul className={`${styles.navAllList} ${isActive ? styles.activeDepth2 : ''} ${isHeaderNav ? styles.gnbDepth2 : styles.navAlldepth2}`}>
    {subMenu.map((subItem, subIndex) => (
      <li key={subIndex}>
        <Link href={subItem.link}>{subItem.title}</Link>
      </li>
    ))}
  </ul>
);

export const NavItem = ({ index, item, gnbdepth2, activeIndex, setActiveIndex, isHeaderNav }) => {
  const isActive = activeIndex === index;
  const handleClick = () => {
    setActiveIndex(isActive ? null : index);
  }

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
          subMenu={item.subMenu} gnbdepth2={gnbdepth2}
          isActive={isActive}
          isHeaderNav={isHeaderNav}
           />
        )}
    </li>
  );
};
