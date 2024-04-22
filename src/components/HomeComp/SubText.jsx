// copyright - Choi Jung mu
// 2024-04-22 Update
//  업데이트 내용
//  gsap로 Main 페이지 꾸미기
function SubText() {
  // subText
  return (
    <div className="w-full h-full flex justify-start text-left">
      <div className="flex  justify-center items-center w-1/2 h-full text-xl flex-col gap-0.5">
        <p id="SubTextMove1">안녕하세요 신입 프론트엔드 개발자 최정무입니다.</p>
        <p id="SubTextMove2">풀 스택을 목표로 성장하고 있습니다.</p>
        <p id="SubTextMove3">
          편안한 마음으로 봐주셨으면 좋겠습니다. 감사합니다.{" "}
        </p>
      </div>
    </div>
  );
}
export default SubText;
