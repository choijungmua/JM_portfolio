import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// 이미지 임포트
import Next from "../assets/next.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/React.png";
import Recoil from "../assets/Recoil.png";
import Sass from "../assets/sass.png";
import Styled from "../assets/styledcomponents.png";
import Tailwind from "../assets/tailwind.png";
import HTML5 from "../assets/HTML.png";
import CSS3 from "../assets/CSS.png";

function BounceBall() {
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    // 초기 공들 생성
    const initialBalls = Array.from({ length: 8 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      directionX: Math.random() < 0.5 ? -1 : 1,
      directionY: Math.random() < 0.5 ? -1 : 1,
    }));
    setBalls(initialBalls);

    // 공들을 이동시키는 interval 설정
    const interval = setInterval(() => {
      setBalls((prevBalls) => {
        const newBalls = prevBalls.map((ball) => {
          // 새로운 위치 계산
          let newX = ball.x + ball.directionX * (Math.random() * 5 + 2);
          let newY = ball.y + ball.directionY * (Math.random() * 5 + 2);

          // 화면 경계에 닿으면 반대 방향으로 튕기도록 처리
          if (newX < 0 || newX > window.innerWidth - 25) {
            newX = ball.x - ball.directionX * (Math.random() * 5 + 2);
            ball.directionX *= -1;
          }
          if (newY < 0 || newY > window.innerHeight - 25) {
            newY = ball.y - ball.directionY * (Math.random() * 5 + 2);
            ball.directionY *= -1;
          }

          return { ...ball, x: newX, y: newY };
        });
        return newBalls;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []); // 의존성 배열을 빈 배열로 설정하여 한 번만 실행되도록 합니다.

  const move = keyframes`
    0% { transform: translate(0, 0); }
    100% { transform: translate(calc(100vw - 25px), calc(100vh - 25px)); }
  `;

  const Div = styled.div`
    position: absolute;
    width: 25px;
    height: 25px;
    background-size: cover;
    animation: ${move} 300s linear infinite;
  `;

  const images = [
    Next,
    Javascript,
    ReactImg,
    Recoil,
    Sass,
    Styled,
    Tailwind,
    HTML5,
    CSS3,
  ];

  return (
    <div className="h-screen absolute">
      {balls.map((ball, index) => {
        const randomImageIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomImageIndex];
        return (
          <Div
            key={index}
            style={{
              left: ball.x,
              top: ball.y,
              backgroundImage: `url(${CSS3})`,
              transform: `scale(${ball.directionX}, ${ball.directionY})`, // 방향에 따라 공의 이미지를 반전시킵니다.
            }}
          />
        );
      })}
    </div>
  );
}

export default BounceBall;
