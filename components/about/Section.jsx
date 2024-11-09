import Image from "next/image";
import React from "react";

const items = [
  {
    icon: "/icon_map.png",
    text: "Complete Packages For All Your Wishes",
  },
  {
    icon: "/icon_experience.png",
    text: "Over 30 Years Of Experience",
  },
  {
    icon: "/icon_guide.png",
    text: "Expert Guides For You",
  },
  {
    icon: "/icon_best_price.png",
    text: "Guaranteed fun at the best price!",
  },
];

const Section = () => {
  return (
    <div
      className="px-[50px] lg:px-[150px] xl:px-[250px] py-[83px] justify-between bg-cover bg-center gap-[83px] mb-[123px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
      style={{
        backgroundImage: `url(/contact-bg.png)`,
      }}
    >
      {items.map(({ icon, text }, i) => (
        <div
          className="flex flex-col bg-[#FFFFFF4D] rounded-[24px] p-[30px] w-full items-center font-semibold"
          key={i}
        >
          <Image src={icon} alt="" width={60} height={60} />
          <p className="mt-[15px] text-xl text-center">{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Section;
