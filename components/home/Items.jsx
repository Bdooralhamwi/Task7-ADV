import Image from "next/image";
import React from "react";

const items = [
  {
    img: "/slide.png",
    title: "Bike and rickshaw rental",
    subTitle: "Book your quality vehicle quickly for an hour or all day!",
  },
  {
    img: "/slide.png",
    title: "Guided tour of the countryside",
    subTitle:
      "Live the real Lucchese experience by visiting the suburbs by bike!",
  },
  {
    img: "/slide.png",
    title: "Taxi and NCC service",
    subTitle:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
  {
    img: "/slide.png",
    title: "Bus Package",
    subTitle:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
];

const Items = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[33px] px-[50px] lg:px-[150px] xl:px-[250px] pt-[120px] pb-[63px]">
      {items.map(({ img, title, subTitle }, i) => (
        <div className="w-full" key={i}>
          <Image
            src={img}
            alt=""
            width={330}
            height={302}
            className="mb-[20px] rounded-[24px] aspect-[330/302] w-full"
          />
          <p className="text-center text-2xl text-[#333333] font-bold min-h-[64px] flex items-center justify-center">
            {title}
          </p>
          <p className="text-center text-lg text-[#333333] mt-[12px]">{subTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Items;
