import React from 'react'
import navData from '@/data/nav'
import Link from 'next/link'

const Nav = () => {
  return (
   <nav id="gnb" className='gnb'>
    <ul className="gnb__depth1">
        {navData.map((item, index) => (
            <li key={index}>
                <Link href={item.link}>
                    <span>{item.title}</span>
                </Link>
                <ul className="gnb__depth2">
                    {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                            <Link href={subItem.link}>{subItem.title}</Link>
                        </li>
                    ))}
                </ul>
            </li>
        ))}
    </ul>
   </nav>
  )
}

export default Nav