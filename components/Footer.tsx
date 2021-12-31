import React from "react";
import {
  MdAccessTime,
  MdExpandMore,
  MdLabelImportantOutline,
  MdOutlineNearMe,
  MdNote,
  MdPerson,
  MdLocalPhone,
  MdVideoCall,
  MdEmail,
} from "react-icons/md";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtoms";

function Footer() {
  const [composeEmail, setComposeEmail] = useRecoilState(modalState);
  const compose = () => {
    setComposeEmail(true);
  };

  return (
    <div className=" bg-white flex items-center justify-between border-b-2 border-t-[1px] border-gray-200 shadow-2xl   w-screen z-50 sticky bottom-0">
      <div className="w-full flex flex-row items-center justify-center mt-10 space-x-2">
        <div
          onClick={compose}
          className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500"
        >
          <MdEmail className="w-6 h-6 text-red-500" />
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
          <MdPerson className="w-6 h-6 text-green-500" />
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
          <MdVideoCall className="w-6 h-6 text-blue-500" />
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
          <MdLocalPhone className="w-6 h-6 text-yellow-500" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
