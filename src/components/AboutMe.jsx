// copyright - Choi Jung mu
// 2024-04-17 Update
//  업데이트 내용
//  gsap 사용 익히기

// import The React
import React from "react";
import { useRef } from "react";

// import The gsap
// What is gsap?
// gsap이란 특정 애니메이션 라이브러리 입니다.
// npm i gsap, (만약 React에서 사용하려고 한다면 npm i @react/gsap으로 다운받으면 됨.)
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

// gsap plugin
gsap.registerPlugin(useGSAP, MotionPathPlugin, ScrollToPlugin, ScrollTrigger);
function AboutMe() {
  // Ref
  const container = useRef();
  const moving = useRef();

  // GSAP 값
  useGSAP(() => {
    // gsap.to(window, { duration: 2, scrollTo: 800 });
    gsap.to(".box", {
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50% 50%",
    });
    gsap.to(".box", {
      duration: 1,
      motionPath: {
        path: "#path",
        ease: "power1.inOut",
        end: 0.9,
        autoRotate: true,
      },
      scrollTrigger: {
        start: "top center",
        trigger: ".container", // 대상 설정 - '.box2'에 왔을 때 시작
        markers: true,
      },
    });
  });

  return (
    <div className="pointer-events-auto w-full h-full flex bg-black text-white">
      <div ref={container} className="container flex items-start">
        {/* MotionPathPlugin 모션의 이동값 */}
        <path
          id="path"
          fill=""
          className=""
          d="M-200,204 C30,166 116,50 262,48 412,48 466,126 518,182 584,250 656,310 754,310 928,310 1500,400 1900,50
"
        />
        <div ref={moving} className="box font-nanum-square-neo-heavy text-6xl">
          Skills
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
