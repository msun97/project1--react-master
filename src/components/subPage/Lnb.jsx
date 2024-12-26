import Link from 'next/link'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'

const Lnb = ({color, name, depth1, className}) => {
  return (
    <div className={`absolute top-[100px] left-1/2 -translate-x-1/2 text-xl z-1 ${color==='black'?'text-black':'text-white'} ${className} mobileMore:left-auto mobileMore:right-0 mobileMore:translate-x-0 mobileMore:px-[30px] mobileMore:text-2xl
    tabletMore:px-[320px]`}>
      <ul className='flex items-center'>
        <Link href="/">
          <li className='flex justify-center items-center'><AiOutlineHome className='w-[13px] h-[13px]
        mobileMore:w-[16px] mobileMore:h-[16px]' /></li>
        </Link>
        <IoIosArrowForward className='w-[13px] h-[13px]
        mobileMore:w-[16px] mobileMore:h-[16px]'/>
        {depth1?<><IoIosArrowForward/> <li>{depth1}</li></>:''}
        <li className='font-semibold'>{name}</li>
    </ul>
  </div>
  )
}

export default Lnb