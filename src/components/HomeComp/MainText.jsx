// copyright - Choi Jung mu
// 2024-04-24 Update
//  업데이트 내용
//  gsap로 Main 페이지 꾸미기

// import the React
import { useEffect, useState } from "react";
// import The gsap Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
// import the react
import { useRef } from "react";

import react from "../../assets/react.gif";
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
function MainText() {
  // timeline
  let textTimeLine = gsap.timeline();
  useEffect(() => {
    textTimeLine.to("#yourElement", 1, {
      delay: 0.5,
      text: "GROW DEVELOPER",
      ease: "none",
    });
    textTimeLine.to("#yourElement1", 1, {
      delay: 0.5,
      text: "CHOI JUNG MU",
      ease: "none",
    });
    textTimeLine.to("#yourElement2", 1, {
      delay: 0.5,
      text: "PORTPOLIO",
      ease: "none",
    });
    textTimeLine.to("#yourElement", 1, {
      delay: 0.5,
      text: "FRONTEND DEVELOPER",
      ease: "none",
      background: "orange",
    });
    gsap.to(".reactImg", {
      scale: 10,
      opacity: 0,
      scrollTrigger: {
        trigger: ".mainCont",
        start: "top top",
        end: "bottom center",
        duration: 1,
        scrub: 1,
        // markers: true,
      },
    });
  }, []);

  return (
    <div>
      <div className="mainCont w-[100vw] h-[100vh]">
        <div className="absolute flex flex-col text-4xl gap-1 w-full mt-24 items-center font-nanum-square-neo-heavy ">
          <p className="text-6xl">Front End Developer</p>
          <p>Choi Jung Mu Portfolio</p>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex bottom-36 absolute text-base">
            <div className="flex items-center flex-col">
              <img
                src={react}
                alt=""
                className="reactImg flex w-[100px] h-[100px]"
              />
              <p className="mb-3 text-xl">개발자로서 생각하는 가치관</p>
              <p>얼마나 내가 웹에 대해 진정성을 가지는가.</p>
              <p>내가 만든 웹의 완성도를 얼마나 높이는가</p>
              <p>사용자 중심적인 웹을 만들기위해 노력하는가.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainText;
