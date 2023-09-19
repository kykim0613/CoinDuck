import { atom } from "recoil";

export const mode = atom({
    key: "mode",
    default: false
})

export interface active {
    $active: boolean;
  }