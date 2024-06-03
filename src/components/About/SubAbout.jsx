// import React and other necessary libraries
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import AboutMe from "./AboutMe";
import Intro from "./Intro";
import MiddleIntro from "./MiddleIntro";
import StartIntro from "./StartIntro";
import ScrollTrigger from "gsap/all";
// Register ScrollTrigger plugin

function SubAbout() {
  // Create a ref for the about section
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");
    const ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".AboutCont",
          pin: true,
          scrub: 1,
          start: "top top",
          end: "bottom top",
        },
        snap: {
          snapTo: 1 / (sections.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        invalidateOnRefresh: true,
      });
    });
  }, []);
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="AboutCont w-[400vw] h-[100vh] flex ">
        <section className="panel w-[100vw] flex">
          <AboutMe />
        </section>
        {/* 스투시 검정색 비니 이미지 */}
        <section className="panel w-[100vw] h-[100vh] flex justify-center items-center">
          <StartIntro />
        </section>{" "}
        <section className="relative panel w-[100vw] h-[100vh] flex justify-center items-center">
          <MiddleIntro />
        </section>
        <section className="panel w-[100vw] overflow-hidden">
          <Intro />
        </section>
      </div>
    </div>
  );
}
export default SubAbout;
