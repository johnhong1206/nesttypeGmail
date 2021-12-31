import React, { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { emailState } from "../atoms/emailAtoms";
import { useRouter } from "next/router";

import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineStarBorderPurple500,
  MdLabelOutline,
} from "react-icons/md";
type Props = {
  key: any;
  id: any;
  message: string;
  subject: string;
  timestamp: string;
  title: string;
  email: any;
  description: string;
};
const EmailRow: FC<Props> = ({
  key,
  id,
  message,
  subject,
  timestamp,
  title,
  email,
}) => {
  const router = useRouter();
  const [getEmail, setGetEmail] = useRecoilState(emailState);

  const navEmails = () => {
    setGetEmail(email);
    router.push(`/email/${id}`);
  };

  return (
    <div
      onClick={navEmails}
      key={key}
      className="text-sm px-2 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between border-b-2 border-gry-200 hover:bg-gray-100 hover:shadow-lg cursor-pointer h-40 lg:h-16 "
    >
      <div className="flex flex-row items-center flex-[0.1]">
        <MdOutlineCheckBoxOutlineBlank />
        <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
          <MdOutlineStarBorderPurple500 />
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500">
          <MdLabelOutline />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center w-full flex-[0.9] mx-1">
        <h3 className="flex-[0.2] mt-3 lg:mt-0">{title}</h3>
        <div className="flex  flex-col lg:flex-row items-center flex-[0.8] mt-3 lg:mt-0">
          <h4 className="flex-[0.2] font-bold ext-center lg:text-left">
            {subject}
          </h4>
          <p className="ml-2 flex-[0.8] text-center lg:text-left">{message}</p>
        </div>
        <p className="text-xs text-gray-500 text-center">{timestamp}</p>
      </div>
    </div>
  );
};

export default EmailRow;
