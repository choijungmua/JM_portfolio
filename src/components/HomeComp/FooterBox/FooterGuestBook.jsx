import { useState, useEffect } from "react";
import gsap from "gsap";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase"; // Firebase 설정 가져오기
import { doc, setDoc } from "firebase/firestore";
import { useRecoilState } from "recoil";
import guestBooks from "../../../atoms/guestBooks";
import guestContents from "../../../atoms/guestBooks";
function FooterGuestBook() {
  const [guestName, setGuestName] = useRecoilState(guestBooks);
  const [guestContent, setGuestContent] = useRecoilState(guestContents);
  // 배열로 방명록의 List값 저장
  const onGuestNameValue = (e) => {
    e.preventDefault();
    setGuestName(e.target.value);
  };
  const onGuestContentsValue = (e) => {
    e.preventDefault();
    setGuestContent(e.target.value);
  };

  // 클릭 시 방명록 저장하기
  const onGuestSubmit = async (e) => {
    e.preventDefault();
    try {
      const collectionRef = collection(db, "guestBook"); // "guestBook" 컬렉션을 참조합니다.
      const docRef = doc(collectionRef); // 새로운 문서 참조를 만듭니다.
      const newDoc = await setDoc(docRef, {
        [guestName]: guestContents,
      }); // 문서에 데이터를 추가합니다.

      console.log("Document written with ID: ", newDoc.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    gsap.to(".guestWriteContainer", {
      opacity: 0,
    });
    gsap.to(".guestViewContainer", {
      delay: 1,

      opacity: 1,
    });
  };

  return (
    <div className="CallMeFooter4 w-[40vw] h-full justify-center items-center flex">
      <div className="guestWrite w-full ">
        <form action="" className="flex-col flex gap-5">
          <div className="flex w-full gap-2 justify-center items-center">
            <input
              id="name"
              type="text"
              required
              placeholder="이름을 임력해주세요"
              onChange={onGuestNameValue}
              className="p-1 sm:w-[100%] w-[50%] text-center text-black rounded-lg"
            />
          </div>
          <div className="flex w-full gap-2 justify-center items-center">
            <input
              type="text"
              id="contents"
              required
              placeholder="내용을 임력해주세요"
              onChange={onGuestContentsValue}
              className="p-1 sm:w-[100%] text-center w-[50%]  h-[50px] text-black rounded-lg"
            />
          </div>
          <button onClick={onGuestSubmit}>작성하기</button>
        </form>
      </div>
    </div>
  );
}
export default FooterGuestBook;
