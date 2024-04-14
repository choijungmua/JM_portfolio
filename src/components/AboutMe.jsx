import { ReactTyped } from "react-typed";
function AboutMe() {
  return (
    <div className="w-full flex flex-col text-white h-full text-center relative">
      <div className="justify-center flex flex-col items-center h-full">
        <ReactTyped
          strings={["안녕하세요 프론트엔드 개발자 최정무입니다."]}
          typeSpeed={40}
          className="mb-2 text-lg"
        />
        <ReactTyped
          strings={["내용을 이렇게 적어서 저쩌구 하겠습니다"]}
          typeSpeed={40}
          className="mb-2"
        />

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
