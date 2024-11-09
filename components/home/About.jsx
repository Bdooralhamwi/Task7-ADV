import Image from "next/image";
import React from "react";

const counts = [
  {
    number: "20+",
    text: "Years Experience",
  },
  {
    number: "100+",
    text: "Happy Customer",
  },
  {
    number: "15+",
    text: "Choice of Services",
  },
  {
    number: "10+",
    text: "Professional Guides",
  },
];

const About = () => {
  return (
    <div className="px-[50px] lg:px-[150px] xl:px-[250px] flex xl:gap-[214px] flex-col xl:flex-row mb-[217px] items-center">
      <Image
        src="/about.png"
        alt="About us image"
        width={450}
        height={650}
        className="ml-[55px]"
      />
      <div>
        <p className="text-[#333333] font-semibold mb-[6px]">
          WELCOME TO OUR SITE!
        </p>
        <p className="text-[#333333] text-[32px] font-extrabold">
          We are the best company for your visit
        </p>
        <p className="my-[32px] text-[#333333] text-lg">
          After decades of experience, and a whole life in Lucca, we offer you
          the most complete tourism service in the city. In addition to having
          bikes and rickshaws to have as much fun as you want, you have the
          choice of tour guides with whom to tour and drivers for your every
          need! We offer packages in the way that you get the most at the lowest
          price. Book with us and we will always be available for you!
        </p>
        <div className="flex gap-[50px]">
          {counts.map(({ number, text }, i) => (
            <div key={i}>
              <p className="text-primary text-[32px] font-bold mb-[6px]">
                {number}
              </p>
              <p className="text-[#333333]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
