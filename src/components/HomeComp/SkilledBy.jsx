// copyright - Choi Jung mu
// 2024-04-26 Update
//  업데이트 내용
//  gsap로 Skills 꾸미기

import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import wire from "../../assets/wire.svg";
import Iphone from "../UI/Iphone";
import SkillCard from "../UI/SkillCard";
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

    gsap.to(".mySkillsRound", {
      scale: 5,
      ease: "none",
      scrollTrigger: {
        trigger: ".mySkillsCont",
        start: "top center",
        end: "300 center",
        scrub: 1,
        duration: 1,
        // markers: true,
      },
    });

    gsap.from(".mainSkillsLeft", {
      x: -window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".mainSkillCont",
        start: "top 90%",
        end: "20% 100%",
        scrub: 1,
        duration: 1,
        markers: true,
      },
    });

    gsap.from(".mainSkillsRight", {
      x: window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".mainSkillCont",
        start: "top 90%",
        end: "20% 100%",
        scrub: 1,
        duration: 1,
        markers: true,
      },
    });
  }, []);
  return (
    <div className="">
      <div className="absolute mySkillsCont w-[100vw] h-[100vh] flex justify-center items-center ">
        <div className="mySkillsRound w-36 h-36 opacity-30 rounded-full bg-white"></div>
      </div>
      <div className="skillCont relative w-[100vw] h-[100vh] flex justify-center items-center flex-col text-6xl gap-2 absolute font-nanum-square-neo-ExtraBold">
        <p className="animationMy">My</p>
        <p className="animationSkills">Skills</p>
      </div>
      <div className="mainSkillCont h-[100vh]">
        <p className="mb-24 w-full flex justify-center text-2xl font-nanum-square-neo-heavy">
          <span className="mainSkillsLeft mr-2">My</span>
          <span className="mainSkillsRight">Skills</span>
        </p>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <p className="my-12">형상관리</p>
          <div className="skillCardCont1 flex justify-center gap-10 mb-24 ">
            <div className="skillCard w-[200px] h-[250px] rounded-3xl">
              <SkillCard />
            </div>
            <div className="skillCard w-[200px] h-[250px] rounded-3xl">
              <SkillCard />
            </div>
            <div className="skillCard w-[200px] h-[250px] rounded-3xl">
              <SkillCard />
            </div>
            <div className="skillCard w-[200px] h-[250px] rounded-3xl">
              <SkillCard />
            </div>
          </div>{" "}
          <div className="skillCardCont2 flex justify-center gap-10 ">
            <div className="skillCard w-[200px] h-[250px] rounded-3xl">
              <SkillCard />
            </div>
            <div className="skillCard w-[200px] h-[250px] rounded-3xl">
              <SkillCard />
            </div>
            <div className="skillCard w-[200px] h-[250px] rounded-3xl">
              <SkillCard />
            </div>
            <div className="skillCard w-[200px] h-[250px] rounded-3xl">
              <SkillCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SkilledBy;
