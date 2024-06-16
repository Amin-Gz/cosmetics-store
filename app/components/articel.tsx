import React from "react";

export default function Articel() {
  return (
    <article className="flex flex-col items-center">
      <div className="flex flex-row items-center justify-center w-full h-[75px] mt-12 mb-12">
        <img
          src="/svg/topbrands-icon.svg"
          alt="topbrands-icon"
          className="w-[60px] h-[60px] "
        />
        <p className="text-[40px] font-semibold">Top brands</p>
      </div>
      <div className="w-[90%] h-[103px] flex flex-row justify-around mb-12">
        <img src="/img/brands/brand1.jpg" alt="brand1" />
        <img src="/img/brands/brand2.jpg" alt="brand2" />
        <img src="/img/brands/brand3.jpg" alt="brand3" />
        <img src="/img/brands/brand4.jpg" alt="brand4" />
        <img src="/img/brands/brand5.jpg" alt="brand5" />
        <img src="/img/brands/brand6.jpg" alt="brand6" />
        <img src="/img/brands/brand7.jpg" alt="brand7" />
      </div>
      <div className="w-[90%] h-[532] flex flex-row  justify-between">
        <div className="w-[505px] h-full rounded-[40px]  ">
          <img src="/img/comeon-products-min.jpg" alt="product1" />
          <div className="w-full h-[129px] flex flex-col items-center rounded-b-[40px] border-2 border-[#00000033] ">
            <p className=" text-[22px] font-normal mt-6">
              The most complete review of Kaman products
            </p>
            <div className="w-[85%] flex flex-row justify-between mt-3 ">
              <p className="text-[22px] text-[#C0C0C0]">hamid</p>
              <p className="text-[22px] text-[#C0C0C0]">2023/10/15</p>
            </div>
          </div>
        </div>
        <div className="w-[505px] h-full rounded-[40px]  ">
          <img src="/img/Screenshot-2023-02-15-052624-min.jpg" alt="product1" />
          <div className="w-full h-[129px] flex flex-col items-center rounded-b-[40px] border-2 border-[#00000033] ">
            <p className=" text-[22px] font-normal mt-6">
              The most complete review of Kaman products
            </p>
            <div className="w-[85%] flex flex-row justify-between mt-3 ">
              <p className="text-[22px] text-[#C0C0C0]">hamid</p>
              <p className="text-[22px] text-[#C0C0C0]">2023/10/15</p>
            </div>
          </div>
        </div>
        <div className="w-[505px] h-full rounded-[40px]  ">
          <img
            src="/img/221222_-_blog_karnawal_produkty-min.jpg"
            alt="product1"
          />
          <div className="w-full h-[129px] flex flex-col items-center rounded-b-[40px] border-2 border-[#00000033] ">
            <p className=" text-[22px] font-normal mt-6">
              The most complete review of Kaman products
            </p>
            <div className="w-[85%] flex flex-row justify-between mt-3 ">
              <p className="text-[22px] text-[#C0C0C0]">hamid</p>
              <p className="text-[22px] text-[#C0C0C0]">2023/10/15</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] h-[95px] mt-24 flex flex-row justify-between ">
        <div className="flex flex-row items-center">
          <div className="w-[95px] h-[95px] flex justify-center border border-black rounded-[30px]">
            <img
              src="/svg/money_back-icon.svg"
              alt="money_back-icon"
              className="w-[71px] "
            />
          </div>
          <div className="ml-5">
            <p className="text-[28px] font-medium">money back</p>
            <p className="text-[14px] font-normal">
              Refund in case of dissatisfaction
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-[95px] h-[95px] flex justify-center border border-black rounded-[30px]">
            <img
              src="/svg/send_gift-icon.svg"
              alt="send_gift-icon"
              className="w-[71px] "
            />
          </div>
          <div className="ml-5">
            <p className="text-[28px] font-medium">Send a gift</p>
            <p className="text-[14px] font-normal">
              Send a gift with a purchase of $50
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-[95px] h-[95px] flex justify-center border border-black rounded-[30px]">
            <img
              src="/svg/originality.svg"
              alt="originality-icon"
              className="w-[71px] "
            />
          </div>
          <div className="ml-5">
            <p className="text-[28px] font-medium">originality</p>
            <p className="text-[14px] font-normal">
              All goods are guaranteed to be original
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-[95px] h-[95px] flex justify-center border border-black rounded-[30px]">
            <img
              src="/svg/instant_delivery-icon.svg"
              alt="instant_delivery-icon"
              className="w-[71px] "
            />
          </div>
          <div className="ml-5">
            <p className="text-[28px] font-medium">instant delivery</p>
            <p className="text-[14px] font-normal">
              Immediate delivery under 48 hours
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
