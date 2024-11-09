import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const links = [
  {
    title: "Services",
    links: [
      {
        href: "",
        text: "Bike and Rickshaw rental",
      },
      {
        href: "",
        text: "Guided Tours of Lucca",
      },
      {
        href: "",
        text: "Guided Bike Tour of Lucca",
      },
      {
        href: "",
        text: "Trip In The Tuscan Hills",
      },
      {
        href: "",
        text: "Transportation With Luxury Cars",
      },
      {
        href: "",
        text: "Wine Tours By Bus With Guide",
      },
    ],
  },
  {
    title: "Home",
    links: [
      {
        text: "Home",
        href: "",
      },
      {
        text: "About Us",
        href: "",
      },
      {
        text: "Tour Packages",
        href: "",
      },
    ],
  },
  {
    title: "Help",
    links: [
      {
        text: "Terms of Use",
        href: "",
      },
      {
        text: "Provicy Policy",
        href: "",
      },
    ],
  },
  {
    title: "Contacts",
    links: [
      {
        text: "Piazza Napoleone, Lucca, Tuscany",
        href: "",
      },
      {
        text: "	+39 346 368 5708",
        href: "",
      },
      {
        text: "	italiainlimo@gmail.com",
        href: "",
      },
    ],
  },
  {
    title: "Social Media",
    social: true,
    links: [
      {
        icon: <FaTwitter />,
      },
      {
        icon: <FaFacebookF />,
      },
      {
        icon: <FaInstagram />,
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="px-[50px] lg:px-[150px] xl:px-[250px] bg-[#333333] py-[40px] flex flex-col gap-[33px]">
      <Image src="/logo.png" alt="" width={133} height={130} />
      <hr className="border-transparent border-b border-b-white opacity-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {links.map(({ title, links, social }, i) => (
          <div key={i} className="flex flex-col w-full">
            <p className="text-xl text-white my-[20px] font-extrabold">{title}</p>
            <div
              className="flex"
              style={{
                flexDirection: social ? "row" : "column",
                gap: social ? 23 : 10,
              }}
            >
              {links.map(({ icon, text, href }, i) => (
                <Link
                  href={href || ""}
                  key={i}
                  className={
                    social
                      ? "bg-primary size-[43px] rounded-full flex items-center justify-center text-[#333]"
                      : "text-white text-lg"
                  }
                >
                  {text}
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <hr className="border-transparent border-b border-b-white opacity-10" />
      <p className="text-white w-full text-center">
        Copyright © 2022. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
