// copyright - Choi Jung mu
// 2024-04-25 Update
//  업데이트 내용
//  gsap로 Skills 꾸미기

import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import wire from "../../assets/wire.svg";
import Iphone from "../UI/Iphone";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function SkilledBy() {
  useGSAP(() => {
    gsap.from(".animationMy", {
      x: window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".skillCont",
        start: "top center",
        end: "center center",
        duration: 1,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.from(".animationSkills", {
      x: -window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".skillCont",
        start: "top center",
        end: "center center",
        scrub: 1,
        duration: 1,
        // markers: true,
      },
    });
    gsap.from(".MySkills", {
      x: -window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".mySkillCont",
        start: "top center",
        end: "top center",
        scrub: 1,
        duration: 1,
        // markers: true,
      },
    });
    gsap.to(".re", {
      scale: 5,
      ease: "none",
      scrollTrigger: {
        trigger: ".box",
        start: "top center",
        end: "300 center",
        scrub: 1,
        duration: 1,
        markers: true,
      },
    });
  }, []);
  return (
    <div className="">
      <div className="absolute box w-[100vw] h-[100vh] flex justify-center items-center ">
        <div className="re w-36 h-36 opacity-30 rounded-full bg-white"></div>
      </div>
      <div className="skillCont relative w-[100vw] h-[100vh] flex justify-center items-center flex-col text-6xl gap-2 absolute font-nanum-square-neo-ExtraBold">
        <p className="animationMy">My</p>
        <p className="animationSkills">Skills</p>
      </div>
      <div className="mySkillCont h-[100vh]">
        <p className="MySkills w-1/2 flex justify-center text-2xl font-nanum-square-neo-heavy">
          MySkills
        </p>
      </div>
    </div>
  );
}
export default SkilledBy;
