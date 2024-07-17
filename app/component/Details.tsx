"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Details: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "Robert Fox",
    email: "robertfox@gmail.com",
    password: "Robert Fox",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setUserData({ ...userData, [field]: e.target.value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="py-8">
      <div className=" grid gap-4 grid-cols-1 lg:grid-cols-2 lg:gap-6">
        <div className=" text-sm lg:text-base font-semibold text-white lg:order-1">
          Account Details
        </div>
        <div className="bg-[#182130]/20 backdrop-blur-md p-5 lg:order-3	mb-6 lg:mb-0 flex flex-col gap-3 rounded-sm border-[1px] border-gray-100/20">
          <button
            onClick={isEditing ? handleUpdateClick : handleEditClick}
            className="px-8 w-28 rounded-md py-3 text-white bg-[#7E4BFA] ml-auto"
          >
            {isEditing ? "Update" : "Edit"}
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
                <label className="text-sm lg:text-base font-medium text-[#E2E8F0]">
                  Full Name
                </label>
                <input
                  placeholder="Full Name"
                  value={userData.fullName}
                  onChange={(e) => handleInputChange(e, "fullName")}
                  className="text-sm lg:text-base border-0 outline-0 bg-transparent font-medium text-[white]"
                  readOnly={!isEditing}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm lg:text-base font-medium text-[#E2E8F0]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={userData.email}
                  onChange={(e) => handleInputChange(e, "email")}
                  className="text-sm lg:text-base border-0 outline-0 bg-transparent font-medium text-[white]"
                  readOnly={!isEditing}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm lg:text-base font-medium text-[#E2E8F0]">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  value={userData.password}
                  onChange={(e) => handleInputChange(e, "password")}
                  className="text-sm lg:text-base border-0 outline-0 bg-transparent font-medium text-[white]"
                  readOnly={!isEditing}
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" text-sm lg:text-base font-semibold text-white lg:order-2">
          Current Plan
        </div>
        <div className="bg-[#182130]/20 backdrop-blur-md p-5 mb-6 lg:mb-0  lg:order-4 flex flex-col gap-3 rounded-sm border-[1px] border-gray-100/20">
          <div className="flex justify-between items-start pb-8">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col">
                <span className="text-sm lg:text-base font-medium text-[#E2E8F0]">
                  Plan
                </span>
                <span className="text-sm lg:text-base border-0 outline-0 bg-transparent font-medium text-[white]">
                  Basic (500 Words Left)
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm lg:text-base font-medium text-[#E2E8F0]">
                  Started
                </span>
                <span className="text-sm lg:text-base border-0 outline-0 bg-transparent font-medium text-[white]">
                  Feb 13, 2024
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm lg:text-base font-medium text-[#E2E8F0]">
                  Next Billing
                </span>
                <span className="text-sm lg:text-base border-0 outline-0 bg-transparent font-medium text-[white]">
                  $95.00 on Mar 13, 2024
                </span>
              </div>
            </div>
            <button className="flex items-center gap-3 px-8 w-28 rounded-md py-3 text-white bg-[#7E4BFA]">
              <span>Action</span>
              <IoIosArrowDown size={16} className="!text-white" />
            </button>
          </div>
          <div className="bg-[#1E293B]/80 backdrop-blur-md p-3 flex gap-3 rounded-md">
            <img src="/image/alert-circle.png" alt="" className="w-7 h-7" />
            <div className="text-white text-sm">
              Looks like there's a past due!{" "}
              <a href="#" className="text-[#4ADE80] underline">
                Click here
              </a>{" "}
              to fix it up and continue your journey with us.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
