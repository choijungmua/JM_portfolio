import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import AboutMe from "./AboutMe";
import Intro from "./Intro";
import MiddleIntro from "./MiddleIntro";
import StartIntro from "./StartIntro";
// Register ScrollTrigger plugin

function SubAbout() {
  return (
    <section className="w-full h-full flex flex-col items-center overflow-hidden">
      <div className="panel w-[100vw] flex">
        <AboutMe />
      </div>
      <div className="text-xl w-[60vw] h-[60vh] border-2 p-10 ">
        <p>안녕하세요 저는 프론트엔드 개발자 최정무입니다.</p>
        <p>
          개발을 잘하고 싶고 모두가 쉽게 볼 수 있는 코드를 작성하고 싶습니다.
        </p>
        <p>
          개발을 잘하고 싶고 모두가 쉽게 볼 수 있는 코드를 작성하고 싶습니다.
        </p>
      </div>
    </section>
  );
}

export default SubAbout;
{
  /* <p className="text-2xl font-nanum-square-neo-Bold">
          코드를 사용함에 있어 나와의 약속
          <div className="border-b-2 w-[20%]"></div>
        </p>

        <p>레거시한 코드를 지양하고</p>
        <p>모두가 보기 쉽도록 코드를 리팩토링 할 것입니다.</p> */
}
