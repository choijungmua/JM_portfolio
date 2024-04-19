// copyright - Choi Jung mu
// 2024-04-18 Update
//  업데이트 내용
//  gsap 사용 익히기

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
gsap.registerPlugin(useGSAP, ScrollTrigger);
function Home() {
  const [xy, setxy] = useState({ x: 0, y: 0 });

  // 밤하늘 별빛 script 가져오기
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@h0rn0chse/night-sky/dist/bundle.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // useGSAP(() => {
  //   gsap.utils.toArray(".section").forEach((section) => {
  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: "top 0",
  //       pinSpacing: false,
  //       delay: 1,
  //       // ease: "power1.inOut",
  //     });
  //   });
  //   ScrollTrigger.create({
  //     snap: 0,
  //   });
  // });

  return (
    <div
      //추가 cursor-none pointer-events-auto
      className="bg-black w-full  h-screen "
      // onMouseMove={mouseHandler}
    >
      <div className="w-full h-full absolute pointer-events-none inset-0">
        <night-sky
          id="nightSky"
          className="w-[full] h-[full] overflow-hidden absolute "
          layers="3"
          density="20"
          velocity-x="40"
          velocity-y="40"
          star-color="#FFF"
          background-color="transparent"
        ></night-sky>
      </div>
      {/* 마우스 휠  */}
      <div
        className={`absolute bg-white z-50
        }  left-[-15px] 
        top-[-15px] rounded-full w-[30px] h-[30px]`}
        style={{ transform: `translate(${xy.x}px, ${xy.y}px)` }}
      />

      {/* 네비게이션 */}

      <Navigation />
      {/* 1 section */}
      <div className=" section relative w-full h-full flex">
        <HomeTopIntro className="" />
      </div>
      {/* About Me */}
      <div className="section relative w-full h-[200vh]">
        <AboutMe />
      </div>
      <div className="section bg-gray-900 relative w-full h-[300vh]">
        <PortPolio />
      </div>
    </div>
  );
}
export default Home;
