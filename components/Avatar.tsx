import React, { FC } from "react";
import Image from "next/image";
import { IAvatar } from "../Interfaces/Interfaces";
import { auth } from "../config/firebase";

interface Props {
  photo: string;
}

const Avatar: FC<Props> = ({ photo }: Props) => {
  const logout = () => {
    auth.signOut();
  };
  return (
    <Image
      onClick={logout}
      className=" rounded-full bg-black hover:opacity-75 cursor-pointer"
      layout="fill"
      src={photo}
    />
  );
};

export default Avatar;
