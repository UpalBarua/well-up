import React from "react";
import { FaInstagram } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="dark:bg-gray-800 dark:text-gray-50">
        <hr></hr>
        <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-400">
          <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            <Image
              src="/images/logo.png"
              alt="well-up logo"
              quality={90}
              height={24}
              width={24}
            />
            <li className="font-semibold text-[18px] hover:border-b hover:border-gray-700 duration-300">
              Courses
            </li>
            <li className="font-semibold text-[18px] hover:border-b hover:border-gray-700 duration-30">
              About
            </li>
            <li className="font-semibold text-[18px] hover:border-b hover:border-gray-700 duration-30">
              Blog
            </li>
            <li className="font-semibold text-[18px] hover:border-b hover:border-gray-700 duration-30">
              Story
            </li>
            <li className="font-semibold text-[18px] hover:border-b hover:border-gray-700 duration-30">
              Contact
            </li>
          </ul>
          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex justify-center space-x-4">
              <FaInstagram className="text-[26px] text-[#E4405F]"></FaInstagram>
              <BsFacebook className="text-[26px] text-[#316FF6]"></BsFacebook>
              <MdOutgoingMail className="text-[30px] text-red-600"></MdOutgoingMail>
              <IoLogoWhatsapp className="text-[26px] text-green-500"></IoLogoWhatsapp>
              <FaTwitter className="text-[26px] text-blue-700"></FaTwitter>
            </div>
          </div>
        </div>
        <div className="pb-2 text-sm text-center dark:text-gray-400">
          Copyright © 2023 Well-Up Technology | All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
