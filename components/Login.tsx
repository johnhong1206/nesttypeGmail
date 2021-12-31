import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { auth, provider } from "../config/firebase";

function Login() {
  const router = useRouter();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        router.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="bg-gray-100 h-screen grid place-items-center ">
      <Head>
        <title>Whatsapp -Sign In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-white w-11/12 md:w-1/3 p-4 h-2/3 flex flex-col items-center justify-center shadow-2xl">
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="logo"
          className="object-contain w-[200px] h-[200px] ml-2"
        />
        <button
          onClick={signIn}
          type="submit"
          className="rounded-xl p-4 outline-none bg-[#0a8d48] text-white font-medium w-full shadow-md mt-2 hover:bg-white hover:text-[#0a8d48]"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
