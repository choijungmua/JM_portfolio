import Next from "../assets/next.png";
import Javascript from "../assets/javascript.png";
import React from "../assets/React.png";
import Recoil from "../assets/Recoil.png";
import Sass from "../assets/sass.png";
import Styled from "../assets/styledcomponents.png";
import Tailwind from "../assets/tailwind.png";
import HTML5 from "../assets/HTML.png";
import CSS3 from "../assets/CSS.png";

function HomeTopIntro() {
  return (
    <div className="bg-blue-100">
      <img src={Next} alt="next.js" className="w-[25px]" />
      <img src={Javascript} alt="Javascript.js" className="w-[25px]" />
      <img src={Recoil} alt="Javascript.js" className="w-[25px]" />
      <img src={Sass} alt="Javascript.js" className="w-[25px]" />
      <img src={CSS3} alt="Javascript.js" className="w-[25px]" />
      <img src={HTML5} alt="Javascript.js" className="w-[25px]" />
      <img src={Tailwind} alt="Javascript.js" className="w-[25px]" />
      <img src={React} alt="Javascript.js" className="w-[25px]" />
      <img src={Styled} alt="Javascript.js" className="w-[25px]" />
      <div className=" bg-white text-black h-screen flex justify-center flex-col items-center">
        <h1 className="text-3xl mb-3 ">취업 성공 평균 확률</h1>
        <div className="border-black border-2 opacity-20 w-[50px] mb-5" />
        <h1 className="text-[#8BC34A] font-nanum-square-neo-heavy text-9xl">
          5%
        </h1>
      </div>
    </div>
  );
}

export default HomeTopIntro;
