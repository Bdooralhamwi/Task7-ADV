import Image from "next/image";
import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const testimonials = [
  {
    img: "/avatar.png",
    name: "Lyod Gomez",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    img: "/avatar.png",
    name: "Lyod Gomez",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
];

const Testimonial = () => {
  return (
    <div className="px-[50px] lg:px-[150px] xl:px-[250px] pb-[160px]">
      <div className="flex mb-[57px] justify-between">
        <p className="text-[32px] font-extrabold">Happy Customers Says</p>
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
      <div className="flex gap-[20px] flex-col lg:flex-row">
        {testimonials.map(({ img, name, text }, i) => (
          <div
            key={i}
            className="flex w-full items-center flex-col border border-[#EFEFEF] p-[30px] rounded-[24px]"
          >
            <Image src={img} width={80} height={80} alt="" />
            <p className="mt-[15px] mb-[38px] text-lg text-[#333333]">{name}</p>
            <p className="text-lg text-[#333333] px-[20px]">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
