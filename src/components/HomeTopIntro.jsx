import BounceBall from "./BounceBall";
import mouseHover from "../atoms/mouseHover"; // 변경된 부분
import bgImg from "../assets/bg.jpg";
import { RxNotionLogo } from "react-icons/rx";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";
import { CgChevronDoubleDown } from "react-icons/cg";

import Profile from "../assets/Profile.jpg";
import React from "react";
function HomeTopIntro() {
  const [mouseHoverer, setMouseHover] = useRecoilState(mouseHover); // 변경된 부분
  const mouseHovered = useRecoilValue(mouseHover);
  return (
    <div className="text-white overflow-hidden relative h-screen flex">
      <div className="flex flex-col  mt-56 ml-24">
        <p>웹으로 세상을 바꾸고 싶은 최정무의</p>

        <div className="border-b-2 my-1 relative" />

        <p className="font-nanum-square-neo-heavy text-6xl">
          GROW
          <span className="text-green-400"> DEVELOPER</span>
          <span className="text-green-400 absolute opacity-15 ml-[-380px] mt-[5px]">
            {" "}
            DEVELOPER
          </span>
        </p>
        <p className="font-nanum-square-neo-light text-6xl text-right">
          PORTPOLIO
        </p>
      </div>

      <div className="">
        <p>프론트엔드로서의 나란?</p>
      </div>
      {/* <div className="flex gap-5 mt-16"> */}
      {/* <BsInstagram size={20} />
        <RxNotionLogo size={20} />
        <AiFillGithub size={20} /> */}
      {/* </div> */}
      <div className="bottom-12 absolute animate-bounce flex flex-col justify-center items-center">
        <p className="text-xs mb-[-6px] font-nanum-square-neo-Light">더보기</p>
        <CgChevronDoubleDown size={28} />
      </div>
    </div>
  );
}

export default HomeTopIntro;
