import gsap from "gsap";
import { useEffect } from "react";
function TailwindCSSCardClick() {
  return (
    <div className=" bg-white gap-2 rounded-3xl flex-col items-center justify-center w-[30vw] h-[60vh] flex p-4 overflow-hidden text-black">
      <div className="Hello">
        <div className="w-[100px]">
          <img src={require("../../../assets/tailwind.png")} alt="" />
        </div>
        <p className="font-nanum-square-neo-Bold mb-2 ">tailwind</p>
        <div className="border-b-2 border-gray-500 w-[20vw]"></div>
        <p>CSS의 겹치는 변수명과, 빠른 디자인이 장점인 Tailwind 입니다.</p>
        <p>하지만 tailwind의 단점인 가독성이 안좋다는 부분을</p>
        <p>꼼꼼한 주석처리로 모두가 보기 쉽게 만들 것 입니다.</p>
      </div>
    </div>
  );
}
export default TailwindCSSCardClick;
