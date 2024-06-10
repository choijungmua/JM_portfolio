import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import AboutMe from "./AboutMe";
import Intro from "./Intro";
import MiddleIntro from "./MiddleIntro";
import StartIntro from "./StartIntro";
// Register ScrollTrigger plugin

function SubAbout() {
  // Create a ref for the about section
  const aboutRef = useRef(null);

  return (
    <section className="w-full h-full flex flex-col items-center overflow-hidden">
      <div className="panel w-[100vw] flex">
        <AboutMe />
      </div>
      <div className="w-[60vw] h-[100vh] ">
        <p className="text-xl font-nanum-square-neo-Bold">
          코드를 사용함에 있어 나와의 약속
          <div className="border-b-2 w-[20%]"></div>
        </p>

        <p>레거시한 코드를 지양하고</p>
        <p>모두가 보기 쉽도록 코드를 리팩토링 할 것입니다.</p>
      </div>
    </section>
  );
}

export default SubAbout;
