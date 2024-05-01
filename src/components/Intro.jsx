// import React and other necessary libraries
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function SubAbout() {
  // Create a ref for the about section
  const timeKindly = gsap.timeline({}); // 무한 반복하는 타임라인 생성
  useEffect(() => {
    timeKindly.to("#Text1", {
      x: 360,
      y: 150,
      repeat: -1,
      yoyo: 1,
      duration: 0.2,
      repeatDelay: 1,
      ease: "none", // easing 효과 없음
    });
    timeKindly.to("#Text2", {
      x: 360,
      y: 150,
      repeat: -1,
      yoyo: 1,
      duration: 0.2,
      repeatDelay: 1,
      ease: "none", // easing 효과 없음
    });
    timeKindly.to("#Text3", {
      x: 360,
      y: 150,
      repeat: -1,
      yoyo: 1,
      duration: 0.2,
      repeatDelay: 1,
      ease: "none", // easing 효과 없음
    });
    timeKindly.to("#Text4", {
      x: 360,
      y: 150,
      repeat: -1,
      yoyo: 1,
      duration: 0.2,
      repeatDelay: 1,
      ease: "none", // easing 효과 없음
    });
    timeKindly.to("#Text5", {
      x: 360,
      y: 150,
      repeat: -1,
      yoyo: 1,
      duration: 0.2,
      repeatDelay: 1,
      ease: "none", // easing 효과 없음
    });
    timeKindly.to("#Text6", {
      x: 360,
      y: 150,
      repeat: -1,
      yoyo: 1,
      duration: 0.2,
      repeatDelay: 1,
      ease: "none", // easing 효과 없음
    });
    timeKindly.to("#Text7", {
      x: 360,
      y: 150,
      repeat: -1,
      yoyo: 1,
      duration: 0.2,
      repeatDelay: 1,
      ease: "none", // easing 효과 없음
    });
    timeKindly.to("#Text8", {
      x: 360,
      y: 150,
      repeat: -1,
      yoyo: 1,
      duration: 0.2,
      repeatDelay: 1,
      ease: "none", // easing 효과 없음
    });
  }, []);

  return (
    <div id="textBox22" className="w-full h-full relative">
      <div className="flex w-full h-full items-center">
        <p className="flex overflow-hidden jsutify-center font-nanum-square-neo-Bold text-6xl whitespace-nowrap">
          <p id="Text1">안녕하세요</p>
          <p id="Text2">저는</p>
          <p id="Text3">친절</p>
          <p id="Text4">하고</p>
          <p id="Text5">성장하는</p>
          <p id="Text6">좋은</p>
          <p id="Text7">개발자가</p>
          <p id="Text8">되고싶습니다</p>
        </p>
      </div>
    </div>
  );
}
export default SubAbout;
