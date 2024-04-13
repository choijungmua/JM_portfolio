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
    <div className="text-white overflow-hidden relative flex-col h-screen flex justify-center items-center">
      <div className="flex relative justify-center items-center z-20">
        <div className="rounded-full z-10 w-[300px] h-[300px] overflow-hidden absolute">
          <img src={Profile} className="" />
        </div>
        <div className="rounded-full w-[340px] h-[340px] bg-white opacity-20 absolute" />
        <div className="rounded-full w-[400px] h-[400px] bg-[#22a68e] opacity-20 absolute" />
      </div>
      <div className="z-[10] rounded-2xl shadow-2xl bg-[#24282e] w-[400px] flex-col gap-3 pt-24 h-[400px] flex justify-center items-center">
        <p className="font-nanum-square-neo-heavy mt-24 text-4xl ">
          CHOI JUNGMU
        </p>
        <p>FRONTEND DEVELOPER</p>
        <div className="flex gap-5 mt-16">
          <BsInstagram size={20} />
          <RxNotionLogo size={20} />
          <AiFillGithub size={20} />
        </div>
      </div>
      <img src={bgImg} alt="bgImg" className="float-left opacity-15 absolute" />
      <div className="bottom-12 absolute animate-bounce flex flex-col items-center">
        <p className="text-xs mb-[-6px] font-nanum-square-neo-Light">더보기</p>
        <CgChevronDoubleDown size={28} />
      </div>
    </div>
  );
}

export default HomeTopIntro;
