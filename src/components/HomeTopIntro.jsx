// copyright - Choi Jung mu
// 2024-04-18 Update
//  업데이트 내용
//  gsap 사용 익히기

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
  useGSAP(() => {
    let tween = gsap.fromTo(
      ".animationText",
      {
        x: -1000,
        y: 800,
        opacity: 0,
        scale: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        stagger: 0.9,
        duration: 5,
        scale: 1,
        ease: "power4.out",
      }
    );
    tween.timeScale(3);
  });

  useEffect(() => {
    gsap.to(".Header", {
      scrollTrigger: {
        trigger: ".TopIntro",
        start: "top top",
        scrub: true,
      },
      yPercent: 50,
      scale: 7,
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
      className="TopIntro text-white w-full overflow-hidden relative h-full flex-col justify-center items-center flex"
    >
      <div className="Header absolute flex w-full">
        <img src={whitewire} alt="" className="w-[500px] mt-72  opacity-10" />
        <img
          src={wiretext}
          alt=""
          className="w-[600px] mt-[-200px] opacity-50"
        />
        <img
          src={wire}
          alt=""
          className="absolute right-0 w-[800px] top-40  opacity-20"
        />
      </div>
      <div className="animationText flex">
        {/* 메인 텍스트 */}
        <div className="flex flex-col">
          <p className=" ">웹으로 세상을 바꾸고 싶은 최정무의</p>

          <div className="border-b-2 my-1 relative" />

          <p className=" text font-nanum-square-neo-heavy text-6xl">
            GROW
            <span className="text-green-400 absolute ml-2"> DEVELOPER</span>
            <span className="text-green-400 absolute mt-1.5 ml-1.5 opacity-15">
              DEVELOPER
            </span>
            <span className="opacity-0">DEVELOPER</span>
          </p>
          <p className=" font-nanum-square-neo-light text-6xl text-right">
            PORTPOLIO
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeTopIntro;
