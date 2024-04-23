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
import TextPlugin from "gsap/TextPlugin";
// import the react
import { useRef } from "react";

// import The Components
import SNSComponent from "./SNSComponent";

// import another
import { ReactTyped } from "react-typed";
import SubText from "./HomeComp/SubText";
import MainText from "./HomeComp/MainText";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

function HomeTopIntro() {
  return (
    <div className=" ">
      {/* <div className="w-full h-full flex justify-center items-center">
        <MainText />
      </div> */}
      <SubText />
    </div>
  );
}

export default HomeTopIntro;
