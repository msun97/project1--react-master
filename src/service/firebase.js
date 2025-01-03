// 'use client'는 생략 가능, 이 파일은 서버에서도 사용할 수 있음.
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase 프로젝트 설정
const firebaseConfig = {
  apiKey: "AIzaSyBgYaUqXElTHde7lABMo6Nrd2pU5f9C3VY",
  authDomain: "frontendenginner.firebaseapp.com",
  projectId: "frontendenginner",
  storageBucket: "frontendenginner.firebasestorage.app",
  messagingSenderId: "626495180126",
  appId: "1:626495180126:web:602e3c546564fa330053cf",
  measurementId: "G-SPREMSD60M"
};

// Firebase 앱 초기화 (Singleton Pattern)
let firebaseApp;

if (!firebaseApp) {
  firebaseApp = initializeApp(firebaseConfig);
}

const auth = getAuth(firebaseApp);

export { auth };
