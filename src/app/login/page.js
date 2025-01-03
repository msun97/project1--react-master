'use client';


import InnerTop from '@/components/subPage/InnerTop'
import Lnb from '@/components/subPage/Lnb'
import Nav from '@/layout/Header/Nav'
import Link from 'next/link'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/service/firebase';

const page = () => {
  // 1. Firebase Auth 초기화
  const handleLogin = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (!email || !password) {
      alert('아이디와 비밀번호를 입력해주세요!');
      return;
    }
  
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('로그인 성공:', userCredential.user);
      alert('로그인 성공!');
      // 로그인 후 원하는 페이지로 이동
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('로그인 실패:', error.message);
      alert('로그인 실패: ' + error.message);
    }
  };
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
                  <input
                    type="email"
                    id="email"
                    placeholder="아이디 (이메일)"
                    className="mb-4 px-4 py-2 border rounded"
                  />
                  <input
                    type="password"
                    id="password"
                    placeholder="비밀번호"
                    className="mb-4 px-4 py-2 border rounded"
                  />
                  <label className="flex items-center mb-4">
                    <input type="checkbox" id="remember" className="mr-2" />
                    아이디 저장
                  </label>
                  <button
                    id="login-btn"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    onClick={handleLogin}
                  >
                    로그인
                  </button>
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