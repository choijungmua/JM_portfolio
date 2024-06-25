import { useEffect, useState, useRef } from "react";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase"; // Firebase 설정 가져오기
import emailjs from "@emailjs/browser";

// Footer 컴포넌트
function Footer() {
  const [test, setTest] = useState();

  // 비동기적으로 데이터 가져오기
  async function getTest() {
    try {
      // document에 대한 참조 생성
      const docRef = doc(db, "Title", "1");
      // 참조에 대한 Snapshot 쿼리
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTest(docSnap.data()); // 가져온 데이터로 상태 설정
      } else {
        console.log("해당 문서가 존재하지 않습니다!");
      }
    } catch (error) {
      console.error("문서를 가져오는 중 오류 발생:", error);
    }
  }

  // 추가로 모든 문서 가져오기 예제
  async function getAllTitles() {
    try {
      const querySnapshot = await getDocs(collection(db, "Title"));
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    } catch (error) {
      console.error("문서를 가져오는 중 오류 발생:", error);
    }
  }

  // 컴포넌트가 처음 마운트될 때 getTest 호출
  useEffect(() => {
    getTest();
    getAllTitles();
  }, []);

  const Ask = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          process.env.REACT_APP_serviceId,
          process.env.REACT_APP_templete,
          form.current,
          process.env.REACT_APP_publicKey
        )
        .then(
          (result) => {
            alert("성공적으로 이메일이 전송되었습니다.");
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
            alert("이메일 전송에 실패하였습니다.");
          }
        );
    };

    return (
      <div className="w-[100vw] h-[100vh]">
        <div className="w-full h-full flex justify-center items-center">
          <form ref={form} onSubmit={sendEmail}>
            <label>
              답변 받으실 이메일
              <input
                type="email"
                name="user_email"
                placeholder="ex)abcd@naver.com"
                className="text-black"
                required
              />
            </label>

            <label>
              문의 제목
              <input
                type="text"
                name="ask_title"
                placeholder="제목을 입력해주세요.(20자 이내)"
                maxLength={20}
                className="text-black"
                required
              />
            </label>

            <label>
              문의 내용
              <textarea
                name="ask_message"
                placeholder="문의 내용을 입력해주세요."
                className="text-black"
                required
              />
            </label>

            <button type="submit">문의하기</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Ask />
    </div>
  );
}

export default Footer;
