// 这里粘贴你从 Firebase Console 获取的配置
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJIwQkeE-fzCOvWY9eQIMh0ekDF_FleC4",
  authDomain: "prompthub-8e1a5.firebaseapp.com",
  projectId: "prompthub-8e1a5",
  storageBucket: "prompthub-8e1a5.firebasestorage.app",
  messagingSenderId: "590633216748",
  appId: "1:590633216748:web:1cd6b29f146568aafe53c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 初始化逻辑可在需要时添加
console.log("Firebase config loaded. Please update with your real credentials.");
