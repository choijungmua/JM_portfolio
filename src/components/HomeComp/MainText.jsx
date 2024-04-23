// copyright - Choi Jung mu
// 2024-04-22 Update
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

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

// timeline
let textTimeLine = gsap.timeline();
function MainText() {
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
  }, []);
  return (
    <div>
      <p id="yourElement" className="text-white text-2xl"></p>
      <p id="yourElement1" className="text-white text-2xl"></p>
      <p id="yourElement2" className="text-white text-2xl"></p>
    </div>
  );
}

export default MainText;
