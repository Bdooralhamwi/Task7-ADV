import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { CiMap } from "react-icons/ci";
import { BiSolidDiscount } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import Image from "next/image";

const packages = [
  {
    img: "/slide.png",
    title: "BIKE / RICKSHAW",
    date: "10",
    items: [
      {
        text: "Your bike for a day",
        icon: <CiCalendarDate />,
      },
      {
        text: "City App",
        icon: <CiMap />,
      },
      {
        text: "Discount on Rickshaw",
        icon: <BiSolidDiscount />,
      },
      {
        text: "Guaranteed Support",
        icon: <BiSupport />,
      },
    ],
  },
  {
    img: "/slide.png",
    title: "BIKE / RICKSHAW",
    date: "10",
    items: [
      {
        text: "Your bike for a day",
        icon: <CiCalendarDate />,
      },
      {
        text: "City App",
        icon: <CiMap />,
      },
      {
        text: "Discount on Rickshaw",
        icon: <BiSolidDiscount />,
      },
      {
        text: "Guaranteed Support",
        icon: <BiSupport />,
      },
    ],
  },
  {
    img: "/slide.png",
    title: "BIKE / RICKSHAW",
    date: "10",
    items: [
      {
        text: "Your bike for a day",
        icon: <CiCalendarDate />,
      },
      {
        text: "City App",
        icon: <CiMap />,
      },
      {
        text: "Discount on Rickshaw",
        icon: <BiSolidDiscount />,
      },
      {
        text: "Guaranteed Support",
        icon: <BiSupport />,
      },
    ],
  },
  {
    img: "/slide.png",
    title: "BIKE / RICKSHAW",
    date: "10",
    items: [
      {
        text: "Your bike for a day",
        icon: <CiCalendarDate />,
      },
      {
        text: "City App",
        icon: <CiMap />,
      },
      {
        text: "Discount on Rickshaw",
        icon: <BiSolidDiscount />,
      },
      {
        text: "Guaranteed Support",
        icon: <BiSupport />,
      },
    ],
  },
];

const PopularPackages = () => {
  return (
    <div className="px-[50px] lg:px-[150px] xl:px-[250px] pb-[120px]">
      <p className="text-[#333333] text-[32px] font-extrabold mb-[60px]">
        The Most Popular Packages
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
        {packages.map(({ date, img, items, title }, i) => (
          <div
            key={i}
            className="border border-[#EFEFEF] rounded-[24px]"
            style={{
              boxShadow: "0px 0px 20px 0px #0000001A",
            }}
          >
            <Image
              className="mb-[25px] rounded-se-[24px] rounded-ss-[24px] w-full"
              src={img}
              alt=""
              width={340}
              height={340}
            />
            <div className="flex flex-col gap-[16px] px-[25px] pb-[25px]">
              <p className="font-extrabold text-xl">{title}</p>
              <div className="flex gap-[6px]">
                <span className="text-[#333333]">€</span>
                <p className="text-[48px] text-primary font-bold">{date}</p>
                <span className="text-[#333333] block mt-auto">/day</span>
              </div>
              <div>
                {items.map(({ text, icon }, i) => (
                  <div
                    className="flex items-center gap-[16px] h-[57px] text-primary text-xl"
                    key={i}
                  >
                    {icon}
                    <p className="text-lg text-[#333333]">{text}</p>
                  </div>
                ))}
              </div>
              <button className="border border-primary rounded-full w-full h-[51px] text-primary text-xl font-semibold">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPackages;
