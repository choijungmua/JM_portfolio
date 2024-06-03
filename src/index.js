import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
gsap.registerPlugin(ScrollTrigger);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
