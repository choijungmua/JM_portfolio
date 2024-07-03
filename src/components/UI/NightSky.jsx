// // copyright - Choi Jung mu
// // 2024-04-25 Update
// //  업데이트 내용
// //  밤하늘 별 섹션 분리
import { useEffect } from "react";
function NightSky() {
  // 밤하늘 별빛 script 가져오기
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@h0rn0chse/night-sky/dist/bundle.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="w-full h-screen fixed  pointer-events-none inset-0">
      <night-sky
        id="nightSky"
        className="w-[full] h-[full] absolute overflow-hidden "
        // 별의 크기들
        layers="3"
        // 별의 갯수
        density="20"
        // X값 속도
        velocity-x="40"
        // y값 속도
        velocity-y="40"
        // 별 색깔
        star-color="#FFF"
        // 부모에 따라감
        background-color="transparent"
      ></night-sky>
    </div>
  );
}

export default NightSky;
