"use client";

import React, { useState } from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { PiUsersThreeLight } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

const filters = [
  {
    label: "Number of people",
    text: "Choose number",
    icon: <PiUsersThreeLight />,
  },
  {
    label: "Date",
    text: "Choose Date",
    icon: <IoCalendarOutline />,
  },
  "",
  {
    label: "Time",
    text: "Choose Time",
    icon: <CiClock2 />,
  },
  "",
  {
    label: "Tour",
    text: "Select Tour",
    icon: <CiFlag1 />,
  },
  "",
  {
    label: "Transportation",
    text: "Select Transportation",
    icon: <IoCarSportOutline />,
  },
];

const Hero = () => {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center flex-col px-[50px] lg:px-[150px] xl:px-[250px]"
      style={{
        backgroundImage: `url(/hero-bg.jpeg)`,
      }}
    >
      <h1 className="font-[Podcast] text-[72px] text-white">
        Enjoy in the best way!
      </h1>
      <p className="text-white mb-[60px] mt-[16px] text-2xl font-bold">
        Enjoy our services for your trip anytime
      </p>
      <div className="bg-[#FFFFFF33] p-[20px] rounded-[12px] w-full">
        <div className="flex">
          <button
            onClick={() => setIsPublic(true)}
            className="transition-colors gap-[10px] text-lg font-semibold p-[16px] flex items-center rounded-ss-[12px]"
            style={{
              backgroundColor: isPublic ? "#FFFFFF" : "#FFFFFF66",
              color: isPublic ? "#FA8B02" : "#FFF",
            }}
          >
            <FaEarthAmericas />
            Public Tours
          </button>
          <button
            onClick={() => setIsPublic(false)}
            className="transition-colors gap-[10px] text-lg font-semibold p-[16px] flex items-center rounded-se-[12px]"
            style={{
              backgroundColor: !isPublic ? "#FFFFFF" : "#FFFFFF66",
              color: !isPublic ? "#FA8B02" : "#FFF",
            }}
          >
            <PiUsersThreeLight />
            Private Tours
          </button>
        </div>
        <div className="w-full rounded-e-[12px] rounded-es-[12px] bg-white p-[12px] flex items-center gap-[12px] justify-between flex-wrap">
          {filters.map((filter, i) =>
            typeof filter == "string" ? (
              <div
                key={i}
                className="w-[1px] h-[50px] bg-[#333333] opacity-10"
              ></div>
            ) : (
              <div key={i}>
                <div className="flex items-center mb-[6px]">
                  <div className="w-[47px] flex justify-end pr-[7px]">
                    {filter.icon}
                  </div>
                  <p className="text-lg font-semibold">{filter.label}</p>
                </div>
                <div className="relative flex items-center pl-[27px] w-full opacity-70">
                  <select className="appearance-none text-xl pl-[20px] w-full cursor-pointer pr-[43px] outline-none text-[#333333]">
                    <option value="">{filter.text}</option>
                  </select>
                  <MdKeyboardArrowDown className="absolute right-0 pointer-events-none" />
                </div>
              </div>
            )
          )}
          <button className="size-[80px] flex items-center justify-center bg-primary rounded-[12px] shrink-0">
            <RiSearchLine fontSize={32} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
