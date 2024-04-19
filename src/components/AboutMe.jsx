// copyright - Choi Jung mu
// 2024-04-18 Update
//  업데이트 내용
//  ScrollTrigger로 스크롤시 변경

// import The React
import React, { useEffect, useState } from "react";
import { useRef } from "react";
// import the img
import commendation from "../assets/commendation.png";
// import The gsap
// What is gsap?
// gsap이란 특정 애니메이션 라이브러리 입니다.
// npm i gsap, (만약 React에서 사용하려고 한다면 npm i @react/gsap으로 다운받으면 됨.)
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

// gsap plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);
function AboutMe() {
  // Ref
  const moving = useRef();
  // 텍스트를 저장하는 상수
  const frontEndText =
    "SKillSKillSKillSKillSKillSKillSKillSKillSKillSKillSKillSKill";
  // 변수

  let skills = gsap.timeline({
    scrollTrigger: {
      trigger: ".frontText",
      scrub: true,
      end: "top top ",
    },
  });
  useEffect(() => {
    //스크롤시 FrontEnd Text 움직이기

    gsap.to(".frontText", {
      scrollTrigger: {
        trigger: ".frontText",
        duration: 3,
        scrub: true,
      },
      xPercent: 10,
      opacity: 0,
    });

    // Skill 글씨 -300에서 0까지 움직이기
    skills.to("#skills", {
      xPercent: 100,
      duration: 1,
    });
  }, []); // useEffect 내에서 의존성 배열이 빈 배열로 지정되었습니다.

  return (
    <div className="pointer-events-auto overflow-hidden flex-col w-full h-full flex bg-black text-white">
      {/* Front Text */}
      <div className="frontTextCont flex w-full h-[288px]">
        <div className="frontText text-green-400 flex flex-col justify-start font-nanum-square-neo-heavy text-8xl items-center w-full">
          <p className="frontText mr-96">{frontEndText}</p>
          <p className="frontText text-white mr-96">
            SKillSKillSKillSKillSKillSKillSKillSKillSKillSKillSKillSKillSKill
          </p>
          <p className="mr-96 frontText">{frontEndText}</p>
        </div>
      </div>
      {/* Skill Text */}
      <div className="SkillContainer flex w-full">
        <h2 className="flex text-6xl font-nanum-square-neo-heavy" id="skills">
          Skills.
        </h2>
      </div>
      <div className="skillSec1 w-full h-[300vh] flex bg-white"></div>
      gdgd
    </div>
  );
}
export default AboutMe;
