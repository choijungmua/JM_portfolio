// copyright - Choi Jung mu
// 2024-04-22 Update
//  업데이트 내용
//  gsap로 Main 페이지 꾸미기
function MainText() {
  {
    /* subText */
  }
  return (
    <h1 className="MainTextMove absolute text-5xl z-10 font-nanum-square-neo-heavy">
      <div className="overflow-hidden  p-3">
        <p className="MainTextShow mb-1">Nice to meet you!</p>
      </div>
      <div className="overflow-hidden p-3">
        <p className="MainTextShow">
          I'm{" "}
          <span className="ChoiJungMuAni border-b-4 pb-1 border-b-green-400">
            Choi Jung Mu.
          </span>
        </p>
      </div>
    </h1>
  );
}
export default MainText;
