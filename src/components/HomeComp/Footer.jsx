// copyright - Choi Jung mu
// 2024-04-25 Update
//  업데이트 내용
//  gsap로 Footer 꾸미기

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
function Footer() {
  const [test, setTest] = useState();

  // 비동기 식으로 fetch
  async function getTest() {
    try {
      // document에 대한 참조 생성
      const docRef = doc(db, "Title", "1");
      // 참조에 대한 Snapshot 쿼리
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTest(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  }

  // 최초 마운트 시에 getTest 호출
  useEffect(() => {
    getTest();
  }, []);

  return (
    <div className=" w-[100vw] h-[100vh]">
      {test !== undefined && <div>{test.Name}</div>}
      <div className="w-[90vw] mx-auto pt-12 border-b-2 opacity-50 border-dashed" />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="font-nanum-square-neo-heavy text-5xl">
          THANK YOU FOR COMMING
        </div>
        <div className="flex flex-col gap-4 text-black">
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="제목" />
          <input type="text" placeholder="내용" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
