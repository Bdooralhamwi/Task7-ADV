import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import Image from "next/image";

const Login = ({ open, setOpen, setOpen1 }) => {
  return (
    <div
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? "all" : "none",
      }}
      className="transition-all fixed w-screen h-screen flex items-center justify-center bg-[#33333399] z-10"
    >
      <div className="rounded-[24px] px-[59] py-[40px] bg-white w-[488px]">
        <div className="flex mb-[24px] justify-between">
          <p className="text-[32px] font-bold">Login</p>
          <button onClick={() => setOpen(false)}>
            <IoMdClose />
          </button>
        </div>
        <label className="flex flex-col mb-[20px] relative text-lg text-[#333333] font-semibold">
          Email Address
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full text-[#333333] text-base mt-[10px] border border-[#33333333] px-[24px] py-[14px] rounded-[8px]"
          />
        </label>
        <label className="flex flex-col mb-[20px] relative text-lg text-[#333333] font-semibold">
          Password
          <div className="w-full flex items-center relative">
            <input
              type="text"
              placeholder="Enter your password"
              className="w-full text-[#333333] text-base mt-[10px] border border-[#33333333] px-[24px] py-[14px] rounded-[8px]"
            />
            <FaEyeSlash className="absolute right-[24px] top-[30px]" />
          </div>
        </label>
        <button className="text-[#33333399] text-sm mb-[24px] w-full text-right">
          Forgot your password?
        </button>
        <button className="w-full h-[47px] bg-primary text-xl font-semibold text-white rounded-full">
          Sign In
        </button>
        <p className="text-[#333333] my-[6px] w-full text-center">or</p>
        <button className="flex items-center justify-center text-[#333333] w-full h-[47px] border border-[#33333333] text-xl font-semibold rounded-full relative">
          <Image
            src="/google.png"
            alt=""
            width={24}
            height={24}
            className="absolute left-[24px]"
          />
          Sign In with Google
        </button>
        <p className="mt-[24px] text-[#333333] text-center w-full">
          Don’t have an account ?{" "}
          <button
            className="text-primary font-semibold"
            onClick={() => {
              setOpen(false);
              setOpen1(true);
            }}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
