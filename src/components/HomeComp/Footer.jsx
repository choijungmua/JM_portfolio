// copyright - Choi Jung mu
// 2024-04-25 Update
//  업데이트 내용
//  gsap로 Footer 꾸미기

import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Footer() {
  return (
    <div className=" w-[100vw] h-[100vh]">
      <div className="w-[90vw] mx-auto pt-12 border-b-2 opacity-50 border-dashed" />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="font-nanum-square-neo-heavy text-5xl">
          THANK YOU FOR COMMING
        </div>
        <div className="flex flex-col gap-4 text-black">
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="제목" />
          <input type="text" placeholder="내용" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
