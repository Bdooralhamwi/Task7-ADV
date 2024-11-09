"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Login from "./Login";
import SignUp from "./SignUp";
import { RiMenu3Fill } from "react-icons/ri";

const links = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About Us",
    href: "/about-us",
  },
  {
    text: "Tour Packages",
    href: "/tour",
  },
  {
    text: "Contact Us",
    href: "/contact",
  },
];

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Login open={open} setOpen={setOpen} setOpen1={setOpen1} />
      <SignUp open={open1} setOpen={setOpen1} setOpen1={setOpen} />
      <div className="bg-[#FFFFFF33] h-[170px] px-[50px] lg:px-[150px] xl:px-[250px] flex items-center justify-between -mb-[170px] relative">
        <Link href="/" className="shrink-0">
          <Image src="/logo.png" alt="website logo" width={133} height={130} />
        </Link>
        <div className="hidden xl:flex items-center gap-[40px]">
          {links.map(({ text, href }, i) => (
            <Link
              className="border-b-2 text-white text-xl font-semibold"
              style={{
                borderColor: href == pathname ? "#FA8B02" : "#fff0",
              }}
              href={href}
              key={i}
            >
              {text}
            </Link>
          ))}
        </div>
        <div className="hidden xl:flex items-center gap-[10px]">
          <button className="opacity-60 text-white flex items-center font-semibold text-xl gap-1">
            Eng
            <MdKeyboardArrowDown />
          </button>
          <button
            onClick={() => setOpen(true)}
            className="px-[12px] py-[10px] text-white font-semibold text-xl"
          >
            Login
          </button>
          <button
            onClick={() => setOpen1(true)}
            className="w-[168px] py-[10px] text-white font-semibold text-xl bg-primary rounded-full"
          >
            Sign Up
          </button>
        </div>
        <div className="flex xl:hidden relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-3xl text-white"
          >
            <RiMenu3Fill />
          </button>
          <div
            style={{
              opacity: menuOpen ? 1 : 0,
              pointerEvents: menuOpen ? "all" : "none",
            }}
            className="absolute flex flex-col bg-white w-[200px] p-[30px] rounded-[10px] top-[120%] right-0"
          >
            {links.map(({ href, text }, i) => (
              <Link href={href} key={i} className="text-lg">
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
