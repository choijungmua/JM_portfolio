import BounceBall from "./BounceBall";
import mouseHover from "../atoms/mouseHover"; // 변경된 부분
import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";
import React from "react";
function HomeTopIntro() {
  const [mouseHoverer, setMouseHover] = useRecoilState(mouseHover); // 변경된 부분
  const mouseHovered = useRecoilValue(mouseHover);
  return (
    <div>
      {/* <BounceBall /> */}

      <div
        onMouseOver={() => {
          setMouseHover((value) => !value);
        }}
        className=" text-black h-screen flex justify-center flex-col items-center"
      >
        <h1 className="text-3xl mb-3">
          취업 {mouseHoverer ? "성공" : "실패"} 확률
        </h1>
        <div className="border-black border-2 opacity-20 w-[50px] mb-5" />
        <h1 className="text-[#8BC34A] font-nanum-square-neo-heavy text-9xl">
          {!mouseHoverer ? "5%" : "95%"}
        </h1>
      </div>
    </div>
  );
}

export default HomeTopIntro;
