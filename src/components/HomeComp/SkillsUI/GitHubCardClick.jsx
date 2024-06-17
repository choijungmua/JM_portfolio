import gsap from "gsap";
import { useEffect } from "react";
function GitHubCardClick() {
  return (
    <div className=" bg-white gap-2 rounded-3xl flex-col items-center justify-center w-[30vw] h-[60vh] flex p-4 overflow-hidden text-black">
      <div className="Hello">
        <div className="w-[100px]">
          <img src={require("../../../assets/github.png")} alt="" />
        </div>
        <p className="font-nanum-square-neo-Bold mb-2 ">Github</p>
        <div className="border-b-2 border-gray-500 w-[20vw]"></div>
        <p>나의 코드들을 모아둔 형상관리 툴입니다.</p>
        <p>매일 github에 잔디를 심고 있으며,</p>
        <p>git에 소홀해지지 않도록 많은 관심을 기울이고 있습니다.</p>
        <div className="flex justify-center">
          <img src={require("../../../assets/githubjandi.png")} alt="" />
        </div>
      </div>
    </div>
  );
}
export default GitHubCardClick;
