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
  const cardArray = gsap.utils.toArray("#Card");
  useGSAP(() => {
    gsap.from(".animationMy", {
      x: window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".skillCont",
        start: "bottom bottom",
        end: "bottom bottom",
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
        start: "bottom bottom",
        end: "bottom bottom",
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
        // markers: true,
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
        // markers: true,
      },
    });
  }, []);
  useEffect(() => {
    gsap.to(".Skill2", {
      width: "400px",
      height: "500px",
      ease: "ease-in",
      rotateY: "360deg",
    });
    gsap.to("#cardArray", {
      rotateY: "360deg",
      ease: "ease-in",
      scrollTrigger: {
        trigger: "#cardArray",
        scrub: 1,
        start: "center bottom",
        end: "center center",
      },
    });
  });
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="mainSkillCont w-full h-full">
        {/* <p className="mb-24 w-full flex justify-center text-2xl font-nanum-square-neo-heavy">
          <span className="mainSkillsLeft mr-2">My</span>
          <span className="mainSkillsRight">Skills</span>
        </p> */}
        {!Card ? (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="skillCont z-10 pointer-events-none opacity-40 absolute flex justify-center items-center flex-col text-[150px] gap-2 font-nanum-square-neo-ExtraBold">
              <p className="animationMy">My</p>
              <p className="animationSkills">Skills</p>
            </div>
            <div className="skillCont w-full h-full relative flex flex-col gap-5 justify-center items-center">
              <div className="animationMy flex gap-5">
                <div id="Card" className="">
                  <SkillCard
                    MainText={"GitHub"}
                    SubText={"깃허브로 branch와 merge를 쉽게 다룰 수 있습니다."}
                    Icon={require("../../assets/github.png")}
                    Explain={"Explain"}
                  />
                </div>
                <div id="Card" className="">
                  <SkillCard
                    MainText={"React"}
                    SubText={
                      "React를 이용하여 웹을 제작 할 수 있으며 다양한 Hook들을 사용 할 수 있습니다."
                    }
                    Icon={require("../../assets/React.png")}
                    Explain={"Explain"}
                  />
                </div>
                <div id="Card" className="">
                  <SkillCard
                    MainText={"Recoil"}
                    SubText={"Recoil을 이용하여 전역관리를 할 수 있습니다.."}
                    Icon={require("../../assets/Recoil.png")}
                    Explain={"Explain"}
                  />
                </div>
                <div id="Card" className=" ">
                  <SkillCard
                    MainText={"TypeScript"}
                    SubText={"잘하기위해 노력할것입니다."}
                    Icon={require("../../assets/TypeScript.png")}
                    Explain={"Explain"}
                  />
                </div>
                <div id="Card" className="">
                  <SkillCard
                    MainText={"Next.js"}
                    SubText={
                      "Next.js로 목업, Vercel 배포를 이용할 수 있습니다."
                    }
                    Icon={require("../../assets/next.png")}
                    Explain={"Explain"}
                  />
                </div>
              </div>
              <div className="animationSkills flex gap-5">
                {" "}
                <div id="Card" className="">
                  <SkillCard
                    MainText={"NodeJs"}
                    SubText={"잘하기위해 노력할것입니다."}
                    Icon={require("../../assets/NodeJs.png")}
                    Explain={"Explain"}
                  />
                </div>
                <div id="Card" className=" ">
                  <SkillCard
                    MainText={"TailwindCSS"}
                    SubText={"TailwindCSS를 이용하여 CSS를 작성할 수 있습니다."}
                    Icon={require("../../assets/tailwind.png")}
                    Explain={"Explain"}
                  />
                </div>
                <div id="Card" className=" ">
                  <SkillCard
                    MainText={"Styled Components"}
                    SubText={
                      "Styled Components를 이용하여 CSS를 작성할 수 있습니다."
                    }
                    Icon={require("../../assets/styledcomponents.png")}
                    Explain={"Explain"}
                  />
                </div>{" "}
                <div id="Card" className=" ">
                  <SkillCard
                    MainText={"GSAP"}
                    SubText={"GSAP로 웹 Animation을 제작 할 수 있습니다."}
                    Icon={require("../../assets/gsap.png")}
                    Explain={"Explain"}
                  />
                </div>
                <div id="Card" className="">
                  <SkillCard
                    MainText={"Sass"}
                    SubText={"Sass를 이용하여 CSS를 작성 할 수 있습니다.."}
                    Icon={require("../../assets/sass.png")}
                    Explain={"Explain"}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <SkillCard />
          </div>
        )}
      </div>
    </div>
  );
}
export default SkilledBy;
