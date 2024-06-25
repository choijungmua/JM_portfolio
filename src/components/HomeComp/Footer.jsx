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
        <div className="w-full h-full flex justify-center items-center flex-col">
          {/* SEND */}
          <p className="text-2xl font-nanum-square-neo-Bold mb-8">SEND ME</p>
          {/* FORM */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              className="text-black rounded-lg px-2 "
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              className="text-black rounded-lg px-2 "
            />
            <label>Message</label>
            <input name="message" className="text-black rounded-lg px-2 " />
            <input
              type="submit"
              value="Send"
              className="text-black rounded-lg px-2 "
            />
            <button type="submit" className="text-white" value="문의하기">
              전송test
            </button>
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
