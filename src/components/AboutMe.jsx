// import React and other necessary libraries
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Vane from "../assets/Vane.png";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  // Create a ref for the about section
  const aboutRef = useRef(null);

  useEffect(() => {
    const timeI = gsap.timeline({}); // 무한 반복하는 타임라인 생성
    const timeRound = gsap.timeline({ delay: 2 }); // 무한 반복하는 타임라인 생성
    const timeBar = gsap.timeline({}); // 무한 반복하는 타임라인 생성

    timeI.to(".isText", {
      rotationX: 360,
      yoyo: true,
      repeat: -1,
      delay: 3,
      duration: 2, // 1초 동안 회전
      ease: "none", // easing 효과 없음
    });
    timeRound.to("#roundMove", {
      rotationY: 180,
      x: "600px",
      yoyo: true,
      repeat: -1,
      duration: 4,
      ease: "power4.inOut",
    });
    gsap.from("#CHOIJUNGMU", {
      rotationX: 180,
      duration: 2,
      ease: "power1.inOut",
    });

    return () => {
      timeI.kill(); // 컴포넌트가 언마운트 될 때 애니메이션 종료
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className="flex w-full relative flex-col justify-center items-center"
    >
      <div className="text-[150px] w-[70%] font-nanum-square-neo-heavy">
        <p className="text-left flex text-violet-400">
          Who <p className="isText ml-4"> i</p>s
        </p>
        <div className="w-1/2 bg-white flex h-[10px] rounded-full"></div>
        <div className="flex flex-row">
          <p id="CHOIJUNGMU" className="whitespace-nowrap flex">
            CHO<p className="isText mr-8"> i</p> JUNG MU
          </p>
          <p className="animate-bounce">?</p>
        </div>
        <div>
          <div className="w-[800px] h-[200px] bg-gray-900 rounded-full items-center flex">
            <div className="text-6xl w-full h-full justify-center items-center flex">
              #열정 #노력 #배움
            </div>
            <div
              id="roundMove"
              className="rounded-full opacity-30 bg-white flex w-[200px] h-[200px] absolute"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
