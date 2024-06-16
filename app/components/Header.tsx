"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [hover, sethover] = useState<any>(true);
  const mouse = () => {
    sethover(!hover);
  };
  return (
    <>
      <header className="w-full h-[197px]  flex items-center flex-col">
        {/* ad --------- */}
        <div className=" w-full h-[66px] flex flex-row items-center justify-around bg-[url('/img/Artboard.png')] bg-no-repeat bg-cover relative">
          <p className="text-[32px] font-bold text-[#5C7855]">
            70 $ Off + Gift
          </p>
          <button className=" w-[236px] h-[50px] rounded bg-[#C6A86C] text-[#F4F4F2] text-[32px] font-bold">
            Register Now
          </button>
        </div>
        <div className="w-full flex flex-row justify-center ">
          {/* leftSide------ */}
          <div className="w-[45%] h-[80px] bg-white flex flex-row ">
            {/* logo---------- */}
            <Link href={"/"}>
              <img
                src="/svg/logo.svg"
                alt="Logo-icon"
                className="w-[177px] h-[40px] ml-5 mt-4"
              />
            </Link>
            {/* search-bar--- */}
            <div className="flex flex-row w-[239px] h-[40px] bg-[#EFEFEF] rounded-[8px] ml-[90px] mt-4">
              <button className="bg-[#F29AA7] w-[46px] h-[40px] flex items-center justify-center rounded-[8px]">
                <img src="/svg/search-icon.svg" alt="search-icon" />
              </button>
              <input
                type="text"
                placeholder="product search and ..."
                className="bg-[#EFEFEF] focus:outline-none text-black pl-2  placeholder:text-black "
              />
            </div>
          </div>
          {/*rightSide----- */}
          <div className="w-[45%] h-[80px] bg-white flex flex-row-reverse   ">
            {/* card-bottom----*/}
            <button className="relative w-[45px] h-[40px] mr-14 mt-4 bg-[#ECECEC] flex items-center justify-center rounded-[4px]">
              <img
                src="/svg/card-icon.svg"
                alt="card-icon"
                className="relative"
              />
              <p className="absolute px-2 text-white text-[20px] bg-[#F29AA7] rounded-full bottom-6 right-7">
                0
              </p>
            </button>
            <hr className="h-[33px] w-[2px] bg-black mt-5 mr-5 ml-5" />
            <button className="flex flex-row-reverse justify-center items-center h-[40px] w-[184px] rounded-[6px] border border-black mt-4">
              <img src="/svg/user-icon.svg" alt="user-icon" />
              <p className="text-[20px] font-semibold">Sign In / SingUp</p>
            </button>
            <hr className="h-[33px] w-[2px] bg-black mt-5 mr-5 ml-5" />
            <button className="flex flex-row-reverse items-center justify-center w-[92px] h-[40px] border border-black rounded-[6px] mt-4">
              <img
                src="/svg/box-icon.svg"
                alt="box-icon"
                className="w-[28px] h-[28px]"
              />
              <p className="text-[20px] font-semibold">Seller</p>
            </button>
          </div>
        </div>
        {/* navbar------- */}
        <div className="flex flex-row justify-between w-[90%] bg-white ">
          <ul className="w-[80%] h-[67px]  flex flex-row items-center *:hover:cursor-pointer">
            <li onClick={mouse} className="flex flex-row items-center ml-5">
              <p className="text-[30px] font-semibold hover:cursor-pointer hover:text-[#F29AA7]">
                products categorization
              </p>
              <img src="/svg/rightArrow-icon.svg" alt="arrow-icon" />
            </li>
            <li className="flex flex-row items-center ml-7">
              <p className="text-[24px] font-normal">Brands</p>
              <img
                src="/svg/badge-icon.svg"
                alt="badge-icon"
                className="w-[38px] h-[51px] ml-2"
              />
            </li>
            <li className="flex flex-row items-center ml-7">
              <p className="text-[24px] font-normal">organizational</p>
              <img
                src="/svg/organization-icon.svg"
                alt="organizational-icon"
                className="w-[45px] h-[45px] ml-2"
              />
            </li>
            <li className="flex flex-row items-center ml-7">
              <p className="text-[24px] font-normal">Counseling</p>
              <img
                src="/svg/Counseling-icon.svg"
                alt="badge-icon"
                className="w-[44px] h-[44px] ml-2"
              />
            </li>
            <li className="flex flex-row items-center ml-7">
              <p className="text-[24px] font-normal">gift card</p>
              <img
                src="/svg/gift-icon.svg"
                alt="badge-icon"
                className="w-[40px] h-[40px] ml-2"
              />
            </li>
            <li className="flex flex-row items-center ml-7">
              <p className="text-[24px] font-normal">weblog</p>
              <img
                src="/svg/weblog-icon.svg"
                alt="badge-icon"
                className="w-[44px] h-[44px] ml-2"
              />
            </li>
          </ul>
          <button className="flex flex-row items-center mr-14">
            <p className="text-[24px] font-normal">branches Sorme</p>
            <img src="/svg/location-icon.svg" alt="location-icon" />
          </button>
        </div>
      </header>
      {/* megaMenu------------ */}
      <div
        hidden={hover}
        onClick={mouse}
        className="w-full h-[250rem] backdrop-brightness-50 absolute z-10"
      >
        <div className="w-[1211px] h-[673px] bg-white rounded-[40px] flex flex-row items-center relative top-[212px] left-32">
          <ul className="h-[90%] w-[380px] ml-24 flex flex-col justify-evenly *:hover:cursor-pointer ">
            <li className="text-[40px] font-semibold hover:text-[#F29AA7]">
              Cosmetic
            </li>
            <li className="text-[40px] font-semibold hover:text-[#F29AA7]">
              Skin products
            </li>
            <li className="text-[40px] font-semibold text-[#F29AA7]">
              Hair products
            </li>
            <li className="text-[40px] font-semibold hover:text-[#F29AA7]">
              Bathroom products
            </li>
            <li className="text-[40px] font-semibold hover:text-[#F29AA7]">
              health products
            </li>
            <li className="text-[40px] font-semibold hover:text-[#F29AA7]">
              Appliances
            </li>
          </ul>
          <hr className="bg-black w-[3px] h-[521px]" />
          <div className="h-[70%] ">
            <Link
              href={"/products/skinCare"}
              className="text-[40px] font-semibold ml-14 cursor-pointer"
            >
              Cream
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
