// copyright - Choi Jung mu
// 2024-04-18 Update
//  업데이트 내용
//  gsap 사용 익히기

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
// import The gsap Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
// import the react
import { useRef } from "react";

// import The Components
import SNSComponent from "./SNSComponent";

// import another
import { ReactTyped } from "react-typed";

gsap.registerPlugin(useGSAP);

function HomeTopIntro() {
  // Ref
  const container = useRef();

  // 변수선언
  const [frontEndMouseHover, setFrontEndMouseHover] = useState(1);
  const [fireHover, setFireHover] = useState(1);

  const animationMainText = gsap.timeline();
  const animationSubText = gsap.timeline();
  useEffect(() => {
    animationMainText.to(".TopIntro", 0.8, {
      // opacity: 1,
      ease: "power4.out",
      delay: 1,
    });
    animationMainText.to(".TopIntro", 0.5, {
      scaleX: 0,
      ease: "power4.out",
      delay: 1,
    });
    animationMainText.to(".animationMainText", 1.5, {
      y: 800,
      ease: "power4.out",
      skewY: 5,
      stagger: {
        amount: 0.3,
      },
    });

    animationMainText.to(".animationMainText", 1.5, {
      y: 800,
      ease: "power4.out",
      skewY: 3,
      stagger: {
        amount: 0.3,
      },
    });
    animationMainText.from(".ball", 1.3, {
      x: 300,
      y: 200,
      borderRadius: "none",
      ease: "power4.out",
      direction: 1,
      delay: 0.1,
      skewY: 3,
    });
    animationMainText.to(".ball", 1, {
      x: 300,
      y: 200,
      borderRadius: "9999px",
      ease: "power4.out",
      delay: 0.1,
      skewY: 3,
    });
    animationMainText.to(".ball", 1, {
      x: -200,
      y: -150,
      borderRadius: "none",
      ease: "power4.out",
      delay: 0.1,
      skewY: 3,
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
      <div className="TopIntro opacity-100 flex z-50 bg-black flex-row w-full h-full justify-center items-center">
        <div className="absolute flex text-white">FRONTENDDEVELOPER</div>
      </div>
      <div className="absolute text-[150px] w-full h-full flex flex-col font-nanum-square-neo-heavy">
        <div className="textContainer">
          <p className="animationMainText">JUNGMU</p>
        </div>
        <div className="textContainer">
          <p className="animationMainText whitespace">FRONTEND WEB</p>
        </div>
        <div className="textContainer">
          <p className="animationMainText">PORTPOLIO</p>
        </div>
        <div className="w-full h-full flex justify-center absolute items-center">
          <div className="ball w-[100px] h-[100px] bg-red-300 rounded rounded-full"></div>
        </div>
        <div className="flex font-nanum-square-neo-Bold text-5xl hidden gap-6 justify-center w-full">
          <span>Skill</span>
          <span>Portpolio</span>
          <span>Design</span>
          <span>AboutMe</span>
          <span>ContactMe</span>
        </div>
      </div>
    </div>
  );
}

export default HomeTopIntro;
