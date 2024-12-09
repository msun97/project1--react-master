import Link from 'next/link'
import React from 'react'

import styles from './style/SkipNav.module.scss'

const SkipNav = () => {
  return (
    <div id={styles.skipNav}> 
        <Link href="#gnb" className={styles.skipNavLink} aria-label="Skip to main menu">메뉴 바로가기</Link>
        <Link href="#main" className={styles.skipNavLink} aria-label="Skip to main content">본문 바로가기</Link>
    </div>
  )
}

export default SkipNav  