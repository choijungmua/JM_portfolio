// copyright - Choi Jung mu
// 2024-04-28 Update
//  업데이트 내용
//  gsap로 Skills 꾸미기

import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import wire from "../../assets/wire.svg";
import Iphone from "../UI/Iphone";
import SkillCard from "../UI/SkillCard";
import { useRecoilValue } from "recoil";
import gientCard from "../../atoms/gientCard";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function SkilledBy() {
  const Card = useRecoilValue(gientCard);
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
  useEffect(() => {
    gsap.to(".Skill2", {
      width: "400px",
      height: "500px",
      ease: "ease-in",
    });
    gsap.to("#Card", {
      rotateY: "360deg",
      ease: "ease-in",
    });
  });
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
        {!Card ? (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <p className="my-12">형상관리</p>
            <div className="w-full h-full flex gap-5 justify-center items-center">
              <div id="Card" className="gd w-[200px] h-[250px]">
                <SkillCard
                  MainText={"GitHub"}
                  SubText={"깃허브로 커밋 할 수 있습니다."}
                  Icon={"github"}
                  Explain={"Explain"}
                />
              </div>
              <div id="Card" className="w-[200px] h-[250px]">
                <SkillCard
                  MainText={"GitHub"}
                  SubText={"깃허브로 커밋 할 수 있습니다."}
                  Icon={"github"}
                  Explain={"Explain"}
                />
              </div>
              <div id="Card" className="w-[200px] h-[250px]">
                <SkillCard
                  MainText={"GitHub"}
                  SubText={"깃허브로 커밋 할 수 있습니다."}
                  Icon={"github"}
                  Explain={"Explain"}
                />
              </div>
              <div id="Card" className="w-[200px] h-[250px]">
                <SkillCard
                  MainText={"GitHub"}
                  SubText={"깃허브로 커밋 할 수 있습니다."}
                  Icon={"github"}
                  Explain={"Explain"}
                />
              </div>
              <div id="Card" className="w-[200px] h-[250px]">
                <SkillCard
                  MainText={"GitHub"}
                  SubText={"깃허브로 커밋 할 수 있습니다."}
                  Icon={"github"}
                  Explain={"Explain"}
                />
              </div>
              <div id="Card" className="w-[200px] h-[250px]">
                <SkillCard
                  MainText={"GitHub"}
                  SubText={"깃허브로 커밋 할 수 있습니다."}
                  Icon={"github"}
                  Explain={"Explain"}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="Skill2 w-[200px] h-[250px]">
              <SkillCard />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default SkilledBy;
