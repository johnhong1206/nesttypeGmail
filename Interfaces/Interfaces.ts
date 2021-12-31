import { IconType } from "react-icons";

export interface IIcon {
  icon: IconType;
  title: string;
  number: number;
}

export interface IUser {
  displayName: string;
  email: string;
  photoURL: string;
}

export interface IAvatar {
  photo: string;
}

export interface IEmail {
  message: string;
  subject: string;
  timestamp: any;
  to: string;
  email: any;
  description: string;
  default: any;
}

export interface IModal {
  default: Boolean;
}
