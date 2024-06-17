import gsap from "gsap";
import { useEffect } from "react";
function SassCardClick() {
  return (
    <div className=" bg-white gap-2 rounded-3xl flex-col items-center justify-center w-[30vw] h-[60vh] flex p-4 overflow-hidden text-black">
      <div className="Hello">
        <div className="w-[100px]">
          <img src={require("../../../assets/sass.png")} alt="" />
        </div>
        <p className="font-nanum-square-neo-Bold mb-2 ">Sass</p>
        <div className="border-b-2 border-gray-500 w-[20vw]"></div>
        <p>Sass는 CSS코드를 좀 더 편리하게 사용하기 위해 사용합니다.</p>
        <p>CSS의 규모가 커질수록 복잡해지고 유지보수가 불편해집니다.</p>
        <p>그것을 보안하기위해 SCSS를 사용합니다.</p>
      </div>
    </div>
  );
}
export default SassCardClick;
