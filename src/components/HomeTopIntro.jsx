// copyright - Choi Jung mu
// 2024-04-21 Update
//  업데이트 내용
//  gsap로 Main 페이지 꾸미기

// import the SCSS
import "./Styles/Animation.css";
// import the React
import { useEffect, useState } from "react";

// import the icons
import { RxNotionLogo } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import { CgChevronDoubleDown } from "react-icons/cg";

// import the IMG
import FrontEndHover from "../assets/FrontEndHover.gif";
import Fire from "../assets/Fire.gif";
import Profile from "../assets/Profile.jpg";
import wiretext from "../assets/wiretext.svg";
import whitewire from "../assets/whitewire.svg";
import wire from "../assets/wire.svg";
import grow from "../assets/grow.gif";
import talk from "../assets/talk.gif";
import design from "../assets/design.gif";
// import The gsap Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
// import the react
import { useRef } from "react";

// import The Components
import SNSComponent from "./SNSComponent";

// import another
import { ReactTyped } from "react-typed";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function HomeTopIntro() {
  // Ref
  const container = useRef();

  // 변수선언
  const [frontEndMouseHover, setFrontEndMouseHover] = useState(1);
  const [fireHover, setFireHover] = useState(1);

  const animationMainText = gsap.timeline();
  const animationSubText = gsap.timeline();
  animationSubText.to(".animationSubText", { x: 1000, duration: 2, scrub: 1 });
  useEffect(() => {
    // animationMainText.to(".TopIntro", 1, {
    //   // opacity: 1,
    //   scale: 2,
    //   ease: "power4.out",
    // });
    // animationMainText.to(".TopIntro", 0.5, {
    //   scaleX: 0,
    //   ease: "power4.out",
    //   delay: 1,
    // });

    animationMainText.from(".animationMainText", 1.5, {
      y: 500,
      ease: "power4.out",
      skewY: 5,
      delay: 1,
      stagger: {
        amount: 0.3,
      },
    });
    ScrollTrigger.create({
      animation: animationSubText,
      trigger: "#container",
      start: "top top",
      pinnedContainer: ".subContainer",
      end: "+=4000",
      pin: true,
      scrub: true,
      anticipatePin: 1,
    });
  }, []);
  const HandleFrontEndHover = (e) => {
    setFrontEndMouseHover((hover) => !hover);
  };
  const HandleFrontEndLeave = (e) => {
    setFrontEndMouseHover((hover) => !hover);
  };
  const HandleFireHover = (e) => {
    setFireHover((hover) => !hover);
  };
  const HandleFireLeave = (e) => {
    setFireHover((hover) => !hover);
  };
  return (
    <div
      ref={container}
      className="overflow-hidden text-white w-full relative h-full flex-col justify-center items-center flex"
    >
      {/* <div className="TopIntro flex z-50 bg-black flex-row w-full h-full justify-center items-center"> */}
      {/* <div className="absolute flex text-white">FRONTENDDEVELOPER</div> */}
      {/* </div> */}
      {/* Main */}
      <div className="absolute  w-[60%] h-full flex ">
        <div className="w-full h-full flex flex-col mt-36">
          {/* mainText */}
          <h1 className="text-5xl relative z-10 font-nanum-square-neo-heavy">
            <div className="overflow-hidden  p-3">
              <p className="animationMainText mb-1">Nice to meet you!</p>
            </div>
            <div className="overflow-hidden p-3">
              <p className="animationMainText">
                I'm{" "}
                <span className="border-b-4 pb-1 border-b-green-400">
                  Choi Jung Mu.
                </span>
              </p>
            </div>
          </h1>
          {/* subText */}
          <div className=".subContainer">
            <div className="text-center ">
              <h3 className=" mt-12 text-2xl font-nanum-square-neo- mb-3">
                <span className="animationSubText font-nanum-square-neo-heavy text-4xl text-green-400">
                  Choi Jung Mu
                </span>
                는 어떤사람인가요?
              </h3>
              <h3 className="text-lg">
                <p className="animationSubText">
                  올바른 성장이란 무엇일까를 고민하고 있습니다.
                </p>
                {/* <p>좋은 커뮤니케이션이 되기 위해 분위기를 바꾸려고합니다.</p> */}
                {/* <p>심미성과 편리성을 갖춘 웹을 만들기 위해 고민합니다.</p> */}
              </h3>
            </div>
            <div className="relative h-full flex justify-center">
              <img src={design} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTopIntro;
