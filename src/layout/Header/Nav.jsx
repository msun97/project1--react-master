import React from 'react'
import navData from '@/data/nav'
import { NavItem } from './NavItem'

const Nav = () => {
  return (
   <nav id="gnb" className='gnb'>
    <ul className="gnb__depth1">
        {navData.map((item, index) => (
           <NavItem key={index} item={item} />
        ))}
    </ul>
   </nav>
  )
}

export default Nav