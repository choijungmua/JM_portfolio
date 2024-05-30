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
  return <div className="pt-4 w-[100vw] h-[100vh]">About Me</div>;
}
export default Footer;
