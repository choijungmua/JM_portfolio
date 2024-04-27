// atoms/gientCard.js

import { atom } from "recoil";

const gientCard = atom({
  key: "gientCard", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default gientCard;
