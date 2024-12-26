import InnerTop from '@/components/subPage/InnerTop'
import Lnb from '@/components/subPage/Lnb'
import Nav from '@/layout/Header/Nav'
import Link from 'next/link'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'

const page = () => {
  return (
    <div className="wrap">
      <div className="login">
        <Lnb color='white' name='로그인'/>
      </div>
      <main id="main">
        <section id="login">
            <Nav variant="page" />
            <div className="inner">
              <InnerTop subtitle={'Login'} title={'회원 로그인'} url={'cont02_bg.jpg'} color={'white'}/>
              <div className='flex justify-center items-center'>
                <div className='max-w-xs py-[100px] h-auto text-center'>
                  <div className='text-6xl font-semibold mb-[85px]'>
                    로그인
                  </div> 
                  <div className='flex flex-col'>
                  아이디 비밀번호 아이디 저장 
                  </div>
                  로그인 회원가입 아이디/비밀번호 찾기</div>
              </div>
            </div>
        </section>
    </main>
</div>
  )
}

export default page