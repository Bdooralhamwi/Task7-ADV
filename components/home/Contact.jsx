import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div
      className="px-[50px] lg:px-[150px] xl:px-[250px] flex flex-col xl:flex-row py-[60px] justify-between bg-cover bg-center items-center xl:items-end"
      style={{
        backgroundImage: `url(/contact-bg.png)`,
      }}
    >
      <div className="bg-[#FFFFFF4D] p-[30px] rounded-[24px] flex flex-col items-center max-w-[569px]">
        <p className="text-[32px] font-extrabold text-[#333333]">
          Get Special Offers for
          <br />
          Organizations
        </p>
        <p className="my-[32px] text-lg text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <Link
          href="/contact"
          className="bg-[#FA8B02] w-[212px] h-[47px] rounded-full flex items-center justify-center text-xl font-semibold text-white"
        >
          Contact Us
        </Link>
      </div>
      <Image
        src="/contact.png"
        alt=""
        width={427}
        height={600}
        className="-mb-[60px] xl:-mt-[210px]"
      />
    </div>
  );
};

export default Contact;
