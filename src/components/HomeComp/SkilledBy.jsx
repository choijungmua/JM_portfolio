// copyright - Choi Jung mu
// 2024-04-28 Update
//  업데이트 내용
//  gsap로 Skills 꾸미기

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SkillCard from "../UI/SkillCard";
import { useRecoilValue, useRecoilState } from "recoil";
import gientCard from "../../atoms/gientCard";
import cardMainText from "../../atoms/gientCard";
import ReactCardClick from "./SkillsUI/ReactCardClick";
import RecoilCardClick from "./SkillsUI/RecoilCardClick";
import TailwindCSSCardClick from "./SkillsUI/TailwindCSSCardClick";
import NextJsCardClick from "./SkillsUI/NextJsCardClick";
import StyledComponentsCardClick from "./SkillsUI/StyledComponentsCardClick";
import GSAPCardClick from "./SkillsUI/GSAPCardClick";
import SassCardClick from "./SkillsUI/SassCardClick";
import GitHubCardClick from "./SkillsUI/GitHubCardClick";
function SkilledBy() {
  const [Card, setCard] = useRecoilState(gientCard);
  const card1 = useRecoilValue(cardMainText);
  const skillTextTimeLine = gsap.timeline();
  const [skillsName, setSkillsName] = useState("frontEnd");
  useGSAP(() => {
    skillTextTimeLine.to(".SkillsText", {
      duration: 1,
      text: "제가 사용 가능한 기술 스택입니다.",
    });
  }, []);
  const onSkillsConfigurationManagement = () => {
    setSkillsName("configurationManagement");
    gsap.to(".SkillsMainNameText", {
      duration: 1,
      text: "형상관리",
    });
  };
  const onSkillsFrontEnd = () => {
    setSkillsName("frontEnd");
    gsap.to(".SkillsMainNameText", {
      duration: 1,
      text: "프론트엔드",
    });
  };
  const onSkillsBackEnd = () => {
    setSkillsName("backEnd");
    gsap.to(".SkillsMainNameText", {
      duration: 1,
      text: "백엔드",
    });
  };
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <div className=" mt-24 absolute w-full text-2xl flex flex-col items-center justify-center">
        <p className="SkillsText"></p>
        <p className="SkillsMainNameText"></p>
      </div>
      <div className="mainSkillCont w-[100vw] h-full">
        {!Card ? (
          <div className="w-[100vw] h-full fl x flex-col justify-center items-center overflow-hidden">
            <div className="skillCont w-full h-full relative flex flex-col gap-5 justify-center items-center">
              {/* 형상관리 */}
              <div
                id="Card"
                className={`${
                  skillsName !== "configurationManagement" ? `hidden` : `inline`
                }`}
              >
                <SkillCard
                  MainText={"GitHub"}
                  SubText={"깃허브로 branch와 merge를 쉽게 다룰 수 있습니다."}
                  Icon={require("../../assets/github.png")}
                  Explain={"Explain"}
                />
              </div>
              {/* 프론트엔드 */}
              <div
                className={`${
                  skillsName !== "frontEnd" ? `hidden` : `inline`
                } flex gap-5`}
              >
                <div id="Card">
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
              {/* 백엔드 */}
              <div
                id="Card"
                className={`${skillsName !== "backEnd" ? `hidden` : `inline`}`}
              >
                <SkillCard
                  MainText={"NodeJs"}
                  SubText={"잘하기위해 노력할것입니다."}
                  Icon={require("../../assets/NodeJs.png")}
                  Explain={"Explain"}
                />
              </div>

              <div className="w-[60%] flex justify-around">
                <p
                  onClick={onSkillsFrontEnd}
                  className={`${
                    skillsName === "frontEnd" &&
                    `text-xl font-nanum-square-neo-Bold`
                  }`}
                >
                  FrontEnd
                </p>
                <p
                  className={`${
                    skillsName === "configurationManagement" &&
                    `text-xl font-nanum-square-neo-Bold`
                  }`}
                  onClick={onSkillsConfigurationManagement}
                >
                  Configuration Management
                </p>
                <p
                  className={`${
                    skillsName === "backEnd" &&
                    `text-xl font-nanum-square-neo-Bold`
                  }`}
                  onClick={onSkillsBackEnd}
                >
                  BackEnd
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div onClick={() => setCard(0)}>
              {card1 === "React" && <ReactCardClick />}
              {card1 === "Recoil" && <RecoilCardClick />}
              {card1 === "TypeScript" && "구현중"}
              {card1 === "TailwindCSS" && <TailwindCSSCardClick />}
              {card1 === "Next.js" && <NextJsCardClick />}
              {card1 === "Styled Components" && <StyledComponentsCardClick />}
              {card1 === "GSAP" && <GSAPCardClick />}
              {card1 === "Sass" && <SassCardClick />}
              {card1 === "GitHub" && <GitHubCardClick />}
              {card1 === "NodeJs" && "구현중"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default SkilledBy;
