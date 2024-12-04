'use client'

import Nav from '@/components/Nav';
import { Util } from '@/layout/Header/Util';
import Search from '@/layout/Header/Search';
import Link from 'next/link';
import React, { useCallback, useEffect } from 'react'
import classNames from 'classnames';

const Header = () => {
  const [isActive, setIsActive] = React.useState(false);
  const handleScroll = useCallback(() => {
        setIsActive(window.scrollY > 1);
}, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  return (
    <header id="header" className={classNames({active: isActive})}>
        <div className="inner">
            <h1 className="logo">
                <Link href="/">
                    <span>CLIO COSMETIC</span>
                </Link>
            </h1>
            <Nav />
            <Util />
            <Search />
        </div>
    </header>
  )
}

export default Header