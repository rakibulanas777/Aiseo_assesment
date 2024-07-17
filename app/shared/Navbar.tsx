import Image from "next/image";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between  items-center">
        <button className="flex items-center cursor-pointer text-white gap-3 py-2 px-3 border-0 bg">
          <FaArrowLeft size={16} />
          <span className="text-base font-semibold">back</span>
        </button>

        <div className="right_nav text-white flex items-center gap-4">
          <span className="text-base cursor-pointer">500 Words</span>
          <div className="w-12 h-12 cursor-pointer relative">
            <Image
              src="/image/profile-pic.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
