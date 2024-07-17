import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Details = () => {
  return (
    <>
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 md:gap-6 ">
        <div className="account_details">
          <div className="py-3 text-sm md:text-base font-semibold text-white">
            Account Details
          </div>
          <div className=" bg-[#182130/50] p-5 flex flex-col gap-3  rounded-sm border-[1px] border-gray-100/20">
            <button className=" px-8 w-28 rounded-md py-3 text-white bg-[#7E4BFA]  ml-auto">
              Edit
            </button>
            <div className="flex gap-4 items-start">
              <div className="w-24 h-24 cursor-pointer relative">
                <Image
                  src="/image/profile-pic.png"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                  <label className=" text-sm md:text-base font-medium text-[#E2E8F0]">
                    Full Name
                  </label>
                  <input
                    placeholder="Full Name"
                    value="Robert Fox"
                    className=" text-sm md:text-base border-0 outline-0 bg-transparent font-medium text-[white]"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className=" text-sm md:text-base font-medium text-[#E2E8F0]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value="robertfox@gmail.com"
                    className=" text-sm md:text-base border-0 outline-0 bg-transparent font-medium text-[white]"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className=" text-sm md:text-base font-medium text-[#E2E8F0]">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    value="Robert Fox"
                    className=" text-sm md:text-base border-0 outline-0 bg-transparent font-medium text-[white]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="current_plan">
          <div className="py-3 text-sm md:text-base font-semibold text-white">
            Current Plan
          </div>
          <div className=" bg-[#182130/50] p-5 flex flex-col gap-3  rounded-sm border-[1px] border-gray-100/20">
            <div className="flex justify-between items-start pb-8">
              <div className=" flex flex-col space-y-6">
                <div className="flex flex-col">
                  <span className=" text-sm md:text-base font-medium text-[#E2E8F0]">
                    Plan
                  </span>
                  <span className=" text-sm md:text-base border-0 outline-0 bg-transparent font-medium text-[white]">
                    Basic (500 Words Left)
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className=" text-sm md:text-base font-medium text-[#E2E8F0]">
                    Started
                  </span>
                  <span className=" text-sm md:text-base border-0 outline-0 bg-transparent font-medium text-[white]">
                    Feb 13, 2024
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className=" text-sm md:text-base font-medium text-[#E2E8F0]">
                    Next Billing
                  </span>
                  <span className=" text-sm md:text-base border-0 outline-0 bg-transparent font-medium text-[white]">
                    $95.00 on Mar 13, 2024
                  </span>
                </div>
              </div>

              <button className="flex items-center gap-3 px-8 w-28 rounded-md py-3 text-white bg-[#7E4BFA]">
                <span>Action</span>
                <IoIosArrowDown size={16} className="!text-white" />
              </button>
            </div>
            <div className="bg-[#334155] p-3 text-white rounded-md">
              Looks like there's a past due! Click here to fix it up and
              continue your journey with us.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
