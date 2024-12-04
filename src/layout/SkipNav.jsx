import Link from 'next/link'
import React from 'react'

const SkipNav = () => {
  return (
    <div id="skip-nav"> 
        <Link href="#gnb" aria-label="Skip to main menu">메뉴 바로가기</Link>
        <Link href="#main" aria-label="Skip to main content">본문 바로가기</Link>
    </div>
  )
}

export default SkipNav