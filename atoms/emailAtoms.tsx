import { atom } from "recoil";
import { IEmail } from "../Interfaces/Interfaces";

export const emailState = atom<any>({
  key: "emailState",
  default: null,
});
