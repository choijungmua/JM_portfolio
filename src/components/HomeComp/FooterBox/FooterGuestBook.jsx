import { useState, useEffect } from "react";
import gsap from "gsap";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase"; // Firebase 설정 가져오기
import { doc, setDoc } from "firebase/firestore";
function FooterGuestBook() {
  const [guestName, setGuestName] = useState("");
  const [guestContents, setGuestContents] = useState("");
  // 배열로 방명록의 List값 저장
  const [dataList, setDataList] = useState([]);
  const onGuestNameValue = (e) => {
    e.preventDefault();
    setGuestName(e.target.value);
  };
  const onGuestContentsValue = (e) => {
    e.preventDefault();
    setGuestContents(e.target.value);
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
  const fetchData = async () => {
    // 비동기 식으로 Firebase의 값 읽어오기
    try {
      const querySnapshot = await getDocs(collection(db, "guestBook")); // Firestore의 "Title" 컬렉션에서 데이터 가져오기

      const fetchedData = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const item = {};

        // 각 문서의 key와 value를 item 객체에 저장
        for (let key in data) {
          item[key] = data[key];
        }

        fetchedData.push(item); // 배열에 객체 추가
      });

      setDataList(fetchedData); // 상태 업데이트
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  // 컴포넌트가 처음 마운트될 때 fetchData 호출
  useEffect(() => {
    // 비동기 식으로 Firebase의 값 읽어오기
    fetchData();
  }, []);
  return (
    <div className="CallMeFooter4 w-[40vw] opacity-0 h-full justify-center items-center flex">
      <div className="guestWrite w-full ">
        <form action="" className="flex-col flex gap-5">
          <div className="flex w-full gap-2 justify-center items-center">
            <input
              id="name"
              type="text"
              required
              placeholder="이름을 임력해주세요"
              onChange={onGuestNameValue}
              className="p-2 sm:w-[100%] w-[70%] text-center text-black rounded-lg"
            />
          </div>
          <div className="flex w-full gap-2 justify-center items-center">
            <input
              type="text"
              id="contents"
              required
              placeholder="내용을 임력해주세요"
              onChange={onGuestContentsValue}
              className="p-2 sm:w-[100%] text-center w-[70%]  h-[100px] text-black rounded-lg"
            />
          </div>
          <button onClick={onGuestSubmit}>작성하기</button>
        </form>
      </div>
    </div>
  );
}
export default FooterGuestBook;
