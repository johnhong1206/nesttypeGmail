import React, { useState, ChangeEvent } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { db } from "../config/firebase";
import firebase from "firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtoms";

function ComposeEmail() {
  const [composeEmail, setComposeEmail] = useRecoilState(modalState);
  const [to, setTo] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [toError, setToError] = useState<string>("");
  const [subjectError, setSubjectError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  const closecompose = () => {
    setComposeEmail(false);
  };

  const handleToChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTo(event.target.value);
  };
  const handleSubjectChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSubject(event.target.value);
  };
  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
  };
  const onSubmit = () => {
    if (!message) {
      setToError("Please Fill in the Contact person");
    }
    if (!subject) {
      setSubjectError("Please Fill in the Subject");
    }
    if (!message) {
      setMessageError("Please Fill in the Message");
    }
    if (!toError && !subjectError && !messageError) {
      db.collection("emails").add({
        to: to,
        subject: subject,
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setComposeEmail(false);
    }
  };
  return (
    <div className="fixed z-50 inset-1 overflow-y-auto ">
      <div className="flex items-center justify-center w-full h-full bg-black shadow-2xl bg-opacity-80 ">
        <div className="relative w-full h-full">
          <IoChevronBackOutline
            onClick={closecompose}
            className="w-8 h-8 text-white absotule -top-2 left-0 cursor-pointer"
          />
          <div className="flex flex-col w-full h-full items-center justify-center">
            <h3 className="text-white text-xl">New Message</h3>
            <form
              className="flex flex-col w-10/12 bg-white shadow-2xl mt-2"
              onSubmit={onSubmit}
            >
              <input
                type="text"
                name="to"
                placeholder={` ${!toError ? "To" : toError}`}
                value={to}
                onChange={handleToChange}
                className={`text-black ${
                  toError && "placeholder-red-500"
                } p-2 px-5 h-full width-6 flex-grow rounded flex-shrink rounded-l-md focus:outline-none
             `}
              />
              <input
                type="text"
                name="subject"
                placeholder={` ${!subjectError ? "Subject" : subjectError}`}
                onChange={handleSubjectChange}
                value={subject}
                className={`text-black ${
                  subjectError && "placeholder-red-500"
                } p-2 px-5 h-full width-6 flex-grow rounded flex-shrink rounded-l-md focus:outline-none 
             `}
              />
              <input
                type="text"
                name="message"
                placeholder={`${!messageError ? "Message" : messageError}`}
                onChange={handleMessageChange}
                value={message}
                className={`text-black ${
                  messageError && "placeholder-red-500"
                } p-2 px-5 h-full width-6 flex-grow rounded flex-shrink rounded-l-md focus:outline-none
                `}
              />
            </form>
            <button
              onClick={onSubmit}
              type="submit"
              className={`bg-blue-500 w-10/12 flex items-center justify-center lg:px-12 lg:py-5 h-6 text-white  rounded     lg:h-8 font-bold hover:shadow-xl
               
            `}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComposeEmail;
