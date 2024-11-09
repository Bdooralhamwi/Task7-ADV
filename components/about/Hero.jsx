"use client";

import React, { useState } from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { PiUsersThreeLight } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

const Hero = () => {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center flex-col px-[50px] lg:px-[150px] xl:px-[250px] "
      style={{
        backgroundImage: `url(/hero2.jpeg)`,
      }}
    >
      <h1 className="font-[Podcast] text-[72px] text-white">
        Our team cares about your full relax
      </h1>
      <p className="text-white mb-[60px] mt-[16px] text-2xl font-bold max-w-[847px]">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness.
      </p>
      <button className="text-white w-[278px] h-[55px] rounded-full flex items-center justify-center text-xl border border-white">
        View our Tour Packages
      </button>
    </div>
  );
};

export default Hero;
