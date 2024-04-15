import { ReactTyped } from "react-typed";
import { BsFillPersonVcardFill, BsBook } from "react-icons/bs";
function AboutMe() {
  return (
    <div className="w-full flex flex-col text-white h-full text-center relative">
      <div className="justify-center flex flex-col items-center h-full">
        <div className="flex flex-col text-left">
          <p className="text-center font-nanum-square-neo-heavy text-2xl text-green-400">
            About Me
          </p>
          <div className="p-3 opacity-80 text-center ">
            <p className="">
              <span className="text-green-400">사용자와의 만남</span>을 웹으로
              표현하는 프론트엔드 개발자 최정무입니다.
            </p>
            <p>
              모두를 위한 환경에서
              <span className="text-green-400">성공적인 커뮤니케이션</span>을
              위해 노력 하겠습니다.
            </p>
          </div>
          <div className="flex flex-row">
            <div className="flex-col">
              <p className="text-lg font-nanum-square-neo-Bold flex gap-2 items-center">
                <BsFillPersonVcardFill size={24} />
                ProFile
              </p>
              <div className="flex flex-row text-sm p-3">
                <div className="font-nanum-square-neo-Bold flex-col ml-2 flex gap-1">
                  <p>Name</p>
                  <p>Birthday</p>
                  <p>Address</p>
                  <p>Phone</p>
                  <p>Email</p>
                </div>
                <div className="font-nanum-square-neo-Light ml-6 flex gap-1 flex-col">
                  <p>최정무</p>
                  <p>2000.12.12</p>
                  <p>인천 계양구 효성동</p>
                  <p>010-3948-1599</p>
                  <p>chlwjd022@gmail.com</p>
                </div>
              </div>
            </div>
            <div>
              <p className=" gap-2 text-lg font-nanum-square-neo-Bold flex items-center">
                <BsBook size={24} />
                새로운 지식에 대한 두려움 없이 개발하겠습니다.
              </p>
              <div className="p-3 font-nanum-square-neo-Light text-sm flex flex-col gap-1 ml-6">
                <p>반응형 웹 제작 경험</p>
                <p>사이드 프로젝트로 백엔드 팀원과 소통경험</p>
                <p>RESTful API로 웹 개발 경험 </p>
                <p>Git을 통한 협업 경험</p>
                <p>어디에서도 융화될 수 있는 인재입니다!</p>
              </div>
            </div>
          </div>
        </div>
        {/* <ReactTyped
          strings={[
            "배우는것을 즐기고",
            "문제를 해결해나갑니다",
            "Search for brands",
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input
            type="text"
            className="bg-red-900 rounded-xl px-1 text-center"
          />
        </ReactTyped> */}
      </div>
    </div>
  );
}
export default AboutMe;
