// copyright - Choi Jung mu
// 2024-04-22 Update
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
import SubText from "./HomeComp/SubText";
import MainText from "./HomeComp/MainText";

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

    animationMainText.from(".MainTextShow", 1.0, {
      y: 500,
      ease: "power4.out",
      skewY: 5,
      delay: 0.5,
      stagger: {
        amount: 0.3,
      },
    });
    animationMainText.to(".MainTextMove", 1.0, {
      y: -200,
      x: -500,
      ease: "power4.out",
      delay: 0.5,
      stagger: {
        amount: 0.3,
      },
    });
    animationMainText.from(".SubTextCont", {
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: "expo",
    });
    animationMainText.from("#SubTextMove1", {
      x: -700,
      ease: "expo",
      timeScale: 1,
    });
    animationMainText.from("#SubTextMove2", {
      x: -700,
      ease: "expo",
      timeScale: 1,
    });
    animationMainText.from("#SubTextMove3", {
      x: -700,
      ease: "expo",
      timeScale: 1,
    });
    animationMainText.to("#animation1", 2, {
      duration: 3,
      delay: 3,
      opacity: 0,
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
      <div className="w-full h-full ">
        {/* mainText */}
        <div
          id="animation1"
          className="absolute flex flex-col justify-center items-center w-full h-full"
        >
          <MainText />

          <SubText />
        </div>
        <div className="w-full h-full absolute flex justify-center items-center">
          <div className="w-1/2 h-full flex justify-center mt-24">
            <p className="text-3xl font-nanum-square-neo-Bold">
              최정무는 누구인가요?
            </p>
          </div>
          <div className="w-1/2 h-full"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeTopIntro;
