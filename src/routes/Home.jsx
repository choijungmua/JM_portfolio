// copyright - Choi Jung mu
// 2024-04-18 Update
//  업데이트 내용
//  gsap로 메인화면 꾸미기

// import the React
import React from "react";
import { useEffect, useRef, useState } from "react";

// import the section
import HomeTopIntro from "../components/HomeTopIntro";
import Navigation from "../components/Navigation";
import AboutMe from "../components/AboutMe";
import PortPolio from "../components/PortPolio";
// import The gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SubText from "../components/HomeComp/SubText";
import MainText from "../components/HomeComp/MainText";
gsap.registerPlugin(useGSAP, ScrollTrigger);
function Home() {
  const [xy, setxy] = useState({ x: 0, y: 0 });

  // 밤하늘 별빛 script 가져오기
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://unpkg.com/@h0rn0chse/night-sky/dist/bundle.min.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div className="bg-black text-white">
      <MainText />
      <SubText />
    </div>
  );
}
export default Home;
