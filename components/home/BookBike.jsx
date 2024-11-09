import Image from "next/image";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";

const inputs = [
  {
    label: "Name and Surname",
    placeholder: "Enter your name and surname",
  },
  {
    label: "Email Address",
    placeholder: "Enter your email address",
  },
  {
    label: "Telephone Number",
    placeholder: "Enter your telephone number",
  },
  {
    label: "Service Type",
    placeholder: "Select the service types",
    icon: <MdKeyboardArrowDown />,
  },
  {
    label: "Date",
    placeholder: "Select the date",
    icon: <IoCalendarOutline />,
  },
  {
    label: "Time",
    placeholder: "Select the time",
    icon: <CiClock2 />,
  },
];

const BookBike = () => {
  return (
    <div
      className="px-[50px] lg:px-[150px] xl:px-[250px] flex py-[60px] justify-between bg-cover bg-center xl:items-end items-center mb-[154px] flex-col xl:flex-row"
      style={{
        backgroundImage: `url(/contact-bg.png)`,
      }}
    >
      <div className="max-w-[734px] w-full">
        <p className="text-[32px] text-[#333333] font-extrabold mb-[36px] text-center w-full">
          Book Now Bike
        </p>
        <div className="bg-[#FFFFFF4D] rounded-[24px] p-[30px]">
          <div className="grid lg:grid-cols-2 gap-[30px]">
            {inputs.map(({ label, icon, placeholder }, i) => (
              <label key={i} className="text-[#333333] text-lg font-semibold">
                {label}
                <div className="relative flex items-center">
                  <input
                    type="text"
                    className="w-full py-[14px] px-[24px] text-base bg-white border-none outline-none rounded-[8px] mt-[8px] font-normal"
                    placeholder={placeholder}
                  />
                  <div className="absolute right-[24px] top-[25px]">{icon}</div>
                </div>
              </label>
            ))}
          </div>
          <button className="bg-[#FA8B02] rounded-full w-[212px] h-[47px] mt-[30px] mx-auto block text-lg text-white font-semibold">
            Book Now
          </button>
        </div>
      </div>
      <Image
        src="/bike.png"
        alt=""
        width={724}
        height={542}
        className="-mb-[94px]"
      />
    </div>
  );
};

export default BookBike;
