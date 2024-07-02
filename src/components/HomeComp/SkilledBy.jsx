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
import FirebaseCardClick from "./SkillsUI/FirebaseCardClick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import firebaseImg from "../../assets/firebase.jpg";
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
  const skillAngleRight = () => {
    gsap.to(".skillAngle", {
      x: "-107%",
    });
  };
  const skillAngleLeft = () => {
    gsap.to(".skillAngle", {
      x: 0,
    });
  };
  // 포트폴리오로 움직이기
  const onMovePortfolio = () => {
    gsap.to(window, {
      duration: 2,
      delay: 1,
      scrollTo: ".javaWeb",
    });
  };
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <div className=" mt-24 absolute whitespace-nowrap w-full text-2xl sm:text-xl flex flex-col items-center justify-center">
        <p className="SkillsText"></p>
        <p className="SkillsMainNameText"></p>
      </div>

      <div className="mainSkillCont w-[100vw] h-full">
        {!Card ? (
          <div className="w-[100vw] h-full flex flex-col justify-center items-center overflow-hidden">
            <div className="flex mt-12 gap-12 whitespace-nowrap">
              <p
                onClick={onSkillsFrontEnd}
                className={`${
                  skillsName === "frontEnd" &&
                  `text-xl font-nanum-square-neo-Bold sm:text-base`
                }`}
              >
                프론트엔드
              </p>
              <p
                className={`${
                  skillsName === "configurationManagement" &&
                  `text-xl font-nanum-square-neo-Bold sm:text-base`
                }`}
                onClick={onSkillsConfigurationManagement}
              >
                형상관리
              </p>
              <p
                className={`${
                  skillsName === "backEnd" &&
                  `text-xl font-nanum-square-neo-Bold sm:text-base`
                }`}
                onClick={onSkillsBackEnd}
              >
                백엔드
              </p>
            </div>
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
              <div className="flex justify-center items-center gap-10">
                <FaAngleLeft
                  className={`${
                    skillsName !== "frontEnd" ? `hidden` : `inline`
                  }`}
                  onClick={skillAngleLeft}
                />
                <div
                  className={`${
                    skillsName !== "frontEnd" ? `hidden` : `inline`
                  } overflow-hidden flex justify-center`}
                >
                  <div className="skillAngle flex w-[320px] sm:w-[225px] flex-col gap-5">
                    <div className="flex gap-5">
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
                          SubText={
                            "Recoil을 이용하여 전역관리를 할 수 있습니다.."
                          }
                          Icon={require("../../assets/Recoil.png")}
                          Explain={"Explain"}
                        />
                      </div>
                      <div id="Card" className="">
                        <SkillCard
                        // MainText={"TypeScript"}
                        // SubText={"잘하기위해 노력할것입니다."}
                        // Icon={require("../../assets/TypeScript.png")}
                        // Explain={"Explain"}
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
                    <div className="flex gap-5">
                      <div id="Card" className=" ">
                        <SkillCard
                          MainText={"TailwindCSS"}
                          SubText={
                            "TailwindCSS를 이용하여 CSS를 작성할 수 있습니다."
                          }
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
                          SubText={
                            "Sass를 이용하여 CSS를 작성 할 수 있습니다.."
                          }
                          Icon={require("../../assets/sass.png")}
                          Explain={"Explain"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <FaAngleRight
                  className={`${
                    skillsName !== "frontEnd" ? `hidden` : `inline`
                  }`}
                  onClick={skillAngleRight}
                />
              </div>

              {/* 백엔드 */}
              <div
                id="Card"
                className={`${skillsName !== "backEnd" ? `hidden` : `inline`}`}
              >
                <SkillCard
                  MainText={"Firebase"}
                  Icon={require("../../assets/firebase.jpg")}
                  Explain={"Explain"}
                />
              </div>
            </div>
            <div
              onClick={onMovePortfolio}
              className="flex flex-col p-4 justify-center animate-bounce mb-10 items-center"
            >
              <p>Portfolio</p>
              <TfiAngleDoubleDown size={18} />
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-center mt-8 items-center">
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
              {card1 === "Firebase" && <FirebaseCardClick />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default SkilledBy;
