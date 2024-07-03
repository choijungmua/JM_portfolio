// atoms/mouseHover.js

import { atom } from "recoil";

const guestBooks = atom({
  key: "guestBooks", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
const guestContents = atom({
  key: "guestContents", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export default guestBooks;
