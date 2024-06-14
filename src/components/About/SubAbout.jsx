import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import AboutMe from "./AboutMe";
import Intro from "./Intro";
import MiddleIntro from "./MiddleIntro";
import StartIntro from "./StartIntro";
// Register ScrollTrigger plugin

function SubAbout() {
  return (
    <section className="yesClickScrollMove w-full h-full flex flex-col items-center overflow-hidden">
      <div className="panel w-[100vw] flex">
        <AboutMe />
      </div>
    </section>
  );
}

export default SubAbout;
