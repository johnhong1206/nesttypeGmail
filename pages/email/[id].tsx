import React, { FC, useState } from "react";
import { emailState } from "../../atoms/emailAtoms";
import { useRecoilState } from "recoil";
import Header from "../../components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  MdOutlineChevronLeft,
  MdForwardToInbox,
  MdReportGmailerrorred,
  MdOutlineDeleteOutline,
  MdOutlineEmail,
  MdOutlineWatchLater,
  MdOutlineCheck,
  MdLabelImportantOutline,
  MdMoreVert,
  MdUnfoldMore,
  MdOutlinePrint,
  MdExitToApp,
  MdLabelImportant,
} from "react-icons/md";
import { IEmail } from "../../Interfaces/Interfaces";

const Email: FC = () => {
  const router = useRouter();
  const [email] = useRecoilState<IEmail>(emailState);
  const subject = email && (email.subject as string);
  const receiver = email && (email.to as string);
  const message = email && (email.message as string);

  const timeStamp =
    email && new Date(email?.timestamp?.seconds * 1000).toISOString();

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-1 flex-col">
        <div className="flex items-center justify-between w-full border-b-2 border-gray-200 px-2 py-4">
          <div className="grid grid-flow-row-dense grid-cols-5 md:grid-cols-5 lg:grid-cols-9">
            <div
              onClick={() => router.push("/")}
              className=" hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500"
            >
              <MdOutlineChevronLeft className="w-6 h-6" />
            </div>
            <div className="hidden lg:inline-flex hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
              <MdForwardToInbox className="w-6 h-6" />
            </div>
            <div className="hidden lg:inline-flex hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
              <MdReportGmailerrorred className="w-6 h-6" />
            </div>
            <div className="hidden lg:inline-flex hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
              <MdOutlineDeleteOutline className="w-6 h-6" />
            </div>
            <div className="hidden lg:inline-flex hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
              <MdOutlineEmail className="w-6 h-6" />
            </div>
            <div className="hidden lg:inline-flex hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
              <MdOutlineWatchLater className="w-6 h-6" />
            </div>
            <div className="hidden lg:inline-flex hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
              <MdOutlineCheck className="w-6 h-6" />
            </div>
            <div className="hidden lg:inline-flex hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
              <MdLabelImportantOutline className="w-6 h-6" />
            </div>
            <div className="hidden lg:inline-flex hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
              <MdMoreVert className="w-6 h-6" />
            </div>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-3">
            <div className=" hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
              <MdUnfoldMore className="w-6 h-6" />
            </div>
            <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
              <MdOutlinePrint className="w-6 h-6" />
            </div>
            <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
              <MdExitToApp className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col border-2 border-gray-200 shadow-lg p-5 m-5 min-h-[80vh]">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center justify-center space-x-4">
              <h2 className="font-bold">{subject}</h2>
              <MdLabelImportant className="w-6 h-6 text-yellow-500" />
              <h2>{receiver}</h2>
            </div>
            <p className="mt-1 lg:mt-0 text-xs lg:text-base">{timeStamp}</p>
          </div>
          <div className="mt-10">{message}</div>
        </div>
      </main>
    </div>
  );
};

export default Email;
