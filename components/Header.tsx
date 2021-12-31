import React, { FC, useContext } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { GrApps, GrNotification } from "react-icons/gr";
import { auth } from "../config/firebase";
import { AuthContext } from "../context/AuthContext";
import Avatar from "./Avatar";

const Header: FC = () => {
  const user = useContext(AuthContext);
  const photoURL = user
    ? (user?.photoURL as string)
    : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg";

  return (
    <div className=" bg-white flex items-center justify-between border-b-2 border-gray-200 w-screen z-50 sticky top-0">
      <div className="flex flex-row items-center">
        <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
          <AiOutlineMenu className="w-8 h-8" />
        </div>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="logo"
          className=" object-contain h-[60px] lg:h-[80px] ml-2"
        />
      </div>
      <div className="flex flex-row items-center flex-grow lg:flex-[0.7] p-[2px] lg:p-[10px] bg-gray-100 mx-4">
        <AiOutlineSearch className="w-6 h-6 text-gray-400" />
        <input
          placeholder="Search Email"
          type="text"
          className="w-full outline-none p-2 lg:p-3 bg-transparent"
        />
        <AiOutlineDown className="w-6 h-6 text-gray-400" />
      </div>
      <div className="hidden lg:flex flex-row justify-center pr-[20px] items-center cursor-pointer mr-7 ">
        <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
          <GrApps className="w-6 h-6" />
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
          <GrNotification className="w-6 h-6" />
        </div>
        <div className="relative h-8 w-8 lg:mx-auto rounded-full">
          <Avatar photo={photoURL} />
        </div>
      </div>
    </div>
  );
};

export default Header;
