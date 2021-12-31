import React, { FC } from "react";
import { AiFillStar } from "react-icons/ai";
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

const Sidebar: React.FC = () => {
  const [composeEmail, setComposeEmail] = useRecoilState(modalState);

  const compose = () => {
    setComposeEmail(true);
  };

  return (
    <div className="hidden lg:flex flex-col flex-[0.3] max-w-[300px] pr-5 shadow-md h-screen max-h-screen ">
      <div
        onClick={compose}
        className="my-4 mx-10 p-4 rounded-full hover:shadow-inner shadow-xl cursor-pointer"
      >
        <p className=" font-medium text-gray-400 text-center">Compose</p>
      </div>
      <div className="flex flex-row items-center justify-between tracking-wide text-gray-500 hover:bg-red-200 hover:text-red-700 cursor-pointer rounded-full py-2 px-3">
        <div className="flex flex-row items-center space-x-2">
          <AiFillStar className="w-5 h-5 " />
          <p className="text-sm ">Inbox</p>
        </div>
        <p className="text-sm ">54</p>
      </div>
      <div className="flex flex-row items-center justify-between tracking-wide text-gray-500 hover:bg-red-200 hover:text-red-700 cursor-pointer rounded-full py-2 px-3">
        <div className="flex flex-row items-center space-x-2">
          <AiFillStar className="w-5 h-5 " />
          <p className="text-sm ">Started</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between tracking-wide text-gray-500 hover:bg-red-200 hover:text-red-700 cursor-pointer rounded-full py-2 px-3">
        <div className="flex flex-row items-center space-x-2">
          <MdAccessTime className="w-5 h-5 " />
          <p className="text-sm ">Snoozed</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between tracking-wide text-gray-500 hover:bg-red-200 hover:text-red-700 cursor-pointer rounded-full py-2 px-3">
        <div className="flex flex-row items-center space-x-2">
          <MdLabelImportantOutline className="w-5 h-5 " />
          <p className="text-sm ">Important</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between tracking-wide text-gray-500 hover:bg-red-200 hover:text-red-700 cursor-pointer rounded-full py-2 px-3">
        <div className="flex flex-row items-center space-x-2">
          <MdOutlineNearMe className="w-5 h-5 " />
          <p className="text-sm ">Sent</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between tracking-wide text-gray-500 hover:bg-red-200 hover:text-red-700 cursor-pointer rounded-full py-2 px-3">
        <div className="flex flex-row items-center space-x-2">
          <MdNote className="w-5 h-5 " />
          <p className="text-sm ">Draf</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between tracking-wide text-gray-500 hover:bg-red-200 hover:text-red-700 cursor-pointer rounded-full py-2 px-3">
        <div className="flex flex-row items-center space-x-2">
          <MdExpandMore className="w-5 h-5 " />
          <p className="text-sm ">More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
