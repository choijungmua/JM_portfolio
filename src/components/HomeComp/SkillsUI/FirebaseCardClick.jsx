import gsap from "gsap";
import { useEffect } from "react";
function GitHubCardClick() {
  return (
    <div className=" bg-white gap-2 rounded-3xl flex-col items-center p-4 justify-center w-[50vw] lg:w-[70vw] sm:w-[100vw] md:w-[80vw] h-[60vh] flex overflow-hidden text-black">
      <div className="Hello">
        <div className="w-[100px]">
          <img src={require("../../../assets/firebase.jpg")} alt="" />
        </div>
        <p className="font-nanum-square-neo-Bold mb-2 ">Firebase</p>
        <div className="border-b-2 border-gray-500 w-[20vw]"></div>
        <p>간단한 Database 저장하기, 로그인 기능들을 만들 수 있습니다.</p>
        <p>
          이 후 Firebase가아닌 Node.js나 Java로 데이터들을 관리해보고 싶습니다.
        </p>
      </div>
    </div>
  );
}
export default GitHubCardClick;
