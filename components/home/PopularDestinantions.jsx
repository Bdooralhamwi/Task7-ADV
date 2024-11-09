import Image from "next/image";
import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { PiUsersThreeLight } from "react-icons/pi";

const slides = [
  {
    img: "/slide.png",
    title: "Lucca Bike Tour",
    price: 34,
    date: "EVERY DAY",
    count: "3-10",
    desc: "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    img: "/slide.png",
    title: "Lucca Bike Tour",
    price: 34,
    date: "EVERY DAY",
    count: "3-10",
    desc: "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    img: "/slide.png",
    title: "Lucca Bike Tour",
    price: 34,
    date: "EVERY DAY",
    count: "3-10",
    desc: "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    img: "/slide.png",
    title: "Lucca Bike Tour",
    price: 34,
    date: "EVERY DAY",
    count: "3-10",
    desc: "A tour of the city and its surroundings led by a professional guide ...",
  },
];

const PopularDestinantions = () => {
  return (
    <div className="px-[50px] lg:px-[150px] xl:px-[250px] py-[120px]">
      <div className="flex mb-[57px] justify-between">
        <p className="text-[32px] font-extrabold">
          Explore Our Popular Destinantions
        </p>
        <div className="flex items-center gap-[20px]">
          <button
            className="size-[50px] flex items-center justify-center rounded-full"
            style={{
              backgroundColor: "#EFEFEF",
              color: "#333333",
            }}
          >
            <MdKeyboardArrowLeft fontSize={20} />
          </button>
          <button
            className="size-[50px] flex items-center justify-center rounded-full"
            style={{
              backgroundColor: "#FA8B02",
              color: "white",
            }}
          >
            <MdKeyboardArrowRight fontSize={20} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[33px]">
        {slides.map(({ img, title, count, date, desc, price }, i) => (
          <div key={i} className="w-full flex flex-col gap-[12px]">
            <Image
              className="aspect-[330/404] object-cover rounded-[24px] mb-[2px] h-[unset] w-full"
              src={img}
              alt="slide image"
              width={330}
              height={404}
            />
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-lg font-semibold text-[#333333] flex items-center gap-[10px]">
              from{" "}
              <span className="text-2xl text-primary font-extrabold">
                {price} €
              </span>
            </p>
            <div className="flex justify-between items-center text-primary">
              <p className="flex gap-[6px] items-center text-[16px] font-semibold">
                <IoCalendarOutline />
                {date}
              </p>
              <p className="flex gap-[6px] items-center text-[16px] font-semibold">
                <PiUsersThreeLight />
                {count}
              </p>
            </div>
            <p className="text-[#333333] text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinantions;
