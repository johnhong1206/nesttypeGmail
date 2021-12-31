import React, { useEffect, useState } from "react";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdKeyboardArrowDown,
  MdOutlineRedo,
  MdOutlineMoreVert,
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
  MdSettings,
  MdKeyboardAlt,
  MdInbox,
  MdOutlineGroup,
} from "react-icons/md";
import { AiOutlineTag } from "react-icons/ai";
import { db } from "../config/firebase";
import firebase from "firebase";
import EmailRow from "./EmailRow";

function EmailList() {
  const [emailList, setEmailList] = useState<firebase.firestore.DocumentData[]>(
    []
  );

  useEffect(() => {
    let unsubscribe;
    const fetchEmail = () => {
      unsubscribe = db
        .collection("emails")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setEmailList(
            snapshot?.docs.map((doc) => ({
              id: doc?.id,
              ...doc?.data(),
            }))
          );
        });
    };
    fetchEmail();
    return unsubscribe;
  }, [db]);

  return (
    <div className="flex-1 lg:flex-[0.7]">
      <div className="flex flex-row items-center justify-between mt-1">
        <div className="flex flex-row items-center justify-center space-x-2">
          <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
            <MdOutlineCheckBoxOutlineBlank className="w-4 h-4 lg:w-7 lg:h-7" />
          </div>
          <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
            <MdKeyboardArrowDown className="w-4 h-4 lg:w-7 lg:h-7" />
          </div>
          <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
            <MdOutlineRedo className="w-4 h-4 lg:w-7 lg:h-7" />
          </div>
          <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
            <MdOutlineMoreVert className="w-4 h-4 lg:w-7 lg:h-7" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2">
          <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
            <MdOutlineChevronLeft className="w-4 h-4 lg:w-7 lg:h-7" />
          </div>
          <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
            <MdOutlineChevronRight className="w-4 h-4 lg:w-7 lg:h-7" />
          </div>
          <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
            <MdKeyboardAlt className="w-4 h-4 lg:w-7 lg:h-7" />
          </div>
          <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
            <MdSettings className="w-4 h-4 lg:w-7 lg:h-7" />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center mt-4">
        <div className="w-full flex items-center justify-center border-b-4 border-red-500 p-4 min-w-[200px]  space-x-4 hover:bg-gray-200 text-red-500  cursor-pointer font-semibold text-[14px]">
          <MdInbox className="w-4 h-4 lg:w-7 lg:h-7" />
          <h4>Primary</h4>
        </div>
        <div className="w-full flex items-center justify-center   p-4 min-w-[200px] text-gray-400 space-x-4 hover:bg-gray-200 hover:text-blue-500 border-b-0 hover:border-b-4 hover:border-blue-500 hover:blue-red-500 cursor-pointer font-semibold text-[14px]">
          <MdOutlineGroup className="w-4 h-4 lg:w-7 lg:h-7" />
          <h4>Social</h4>
        </div>
        <div className=" w-full flex items-center justify-center   p-4 min-w-[200px] text-gray-400 space-x-4 hover:bg-gray-200 hover:text-green-600 border-b-0 hover:border-b-4 hover:border-green-600 hover:blue-red-500 cursor-pointer font-semibold text-[14px]">
          <AiOutlineTag className="w-4 h-4 lg:w-7 lg:h-7" />
          <h4>Promotion</h4>
        </div>
      </div>
      <div className="w-full h-screen overflow-y-scroll">
        {emailList.map((email) => {
          return (
            <EmailRow
              key={email.id}
              id={email.id}
              message={email.message}
              subject={email.subject}
              timestamp={new Date(
                email.timestamp?.seconds * 1000
              ).toUTCString()}
              title={email.to}
              email={email}
              description={email.description}
            />
          );
        })}

        <div className=" pb-72" />
      </div>
    </div>
  );
}

export default EmailList;
