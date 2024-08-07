// atoms/mouseHover.js

import { atom } from "recoil";

const mouseHover = atom({
  key: "mouseHover", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default mouseHover;
