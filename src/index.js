import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1rhy2ulVoKofAJL6gmCDSo6EYSrgR1NM",
  authDomain: "portfoliojm-d500d.firebaseapp.com",
  databaseURL:
    "https://portfoliojm-d500d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfoliojm-d500d",
  storageBucket: "portfoliojm-d500d.appspot.com",
  messagingSenderId: "971303951105",
  appId: "1:971303951105:web:65d491953dc16f69bdd900",
  measurementId: "G-22337Y81CT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById("root"));
gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
