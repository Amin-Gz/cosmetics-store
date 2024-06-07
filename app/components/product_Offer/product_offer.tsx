"use client";
import CountdownTimer from "./timer";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Autoplay } from "swiper/modules";
import axios from "axios";

export default function Product_offer() {
  // axios
  //   .get("https://keykavoos-sorme.liara.run/Product/all_Product")
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  return (
    <div className="bg-[#F29AA7] w-[90%] h-[372px] mt-20 mx-auto flex flex-row items-center rounded-[40px] ">
      <div className="w-[312px] h-[346px] flex flex-col items-center justify-around ml-16">
        <img src="/svg/offerBox-icon.svg" alt="offerBox-img" />
        <p className="text-[48px] font-semibold text-white">Daily Off</p>
      </div>
      <CountdownTimer />
      <div className="h-[305px] w-[1180px] rounded-[40px] ">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          rewind={true}
          slidesPerView={5}
          spaceBetween={2}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full h-full flex flex-col-reverse items-center">
              <div className="flex felx-row items-center justify-around w-full h-[40%] ">
                <p className="font-semibold text-white text-[24px] bg-[#F29AA7] rounded-[40px] w-[65px] h-[35px]">
                  25%
                </p>
                <div className="flex flex-col justify-end ">
                  <p className="text-black text-[35px] font-semibold ">60$</p>
                  <s className="text-[#8B8B8B] font-semibold ">120$</s>
                </div>
              </div>
              <img
                src="/img/row products/4.jpg"
                alt="product"
                className="w-[79px] h-[175px] mt-4"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex flex-col-reverse items-center">
              <div className="flex felx-row items-center justify-around w-full h-[40%] ">
                <p className="font-semibold text-white text-[24px] bg-[#F29AA7] rounded-[40px] w-[65px] h-[35px]">
                  25%
                </p>
                <div className="flex flex-col justify-end ">
                  <p className="text-black text-[35px] font-semibold ">60$</p>
                  <s className="text-[#8B8B8B] font-semibold ">120$</s>
                </div>
              </div>
              <img
                src="/img/row products/3.jpg"
                alt="product"
                className="w-[79px] h-[175px] mt-4"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex flex-col-reverse items-center">
              <div className="flex felx-row items-center justify-around w-full h-[40%] ">
                <p className="font-semibold text-white text-[24px] bg-[#F29AA7] rounded-[40px] w-[65px] h-[35px]">
                  25%
                </p>
                <div className="flex flex-col justify-end ">
                  <p className="text-black text-[35px] font-semibold ">60$</p>
                  <s className="text-[#8B8B8B] font-semibold ">120$</s>
                </div>
              </div>
              <img
                src="/img/row products/1.jpg"
                alt="product"
                className="w-[79px] h-[175px] mt-4"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex flex-col-reverse items-center">
              <div className="flex felx-row items-center justify-around w-full h-[40%] ">
                <p className="font-semibold text-white text-[24px] bg-[#F29AA7] rounded-[40px] w-[65px] h-[35px]">
                  25%
                </p>
                <div className="flex flex-col justify-end ">
                  <p className="text-black text-[35px] font-semibold ">60$</p>
                  <s className="text-[#8B8B8B] font-semibold ">120$</s>
                </div>
              </div>
              <img
                src="/img/row products/2.jpg"
                alt="product"
                className="w-[79px] h-[175px] mt-4"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex flex-col-reverse items-center">
              <div className="flex felx-row items-center justify-around w-full h-[40%] ">
                <p className="font-semibold text-white text-[24px] bg-[#F29AA7] rounded-[40px] w-[65px] h-[35px]">
                  25%
                </p>
                <div className="flex flex-col justify-end ">
                  <p className="text-black text-[35px] font-semibold ">60$</p>
                  <s className="text-[#8B8B8B] font-semibold ">120$</s>
                </div>
              </div>
              <img
                src="/img/row products/5.jpg"
                alt="product"
                className="w-[79px] h-[175px] mt-4"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex flex-col-reverse items-center">
              <div className="flex felx-row items-center justify-around w-full h-[40%] ">
                <p className="font-semibold text-white text-[24px] bg-[#F29AA7] rounded-[40px] w-[65px] h-[35px]">
                  25%
                </p>
                <div className="flex flex-col justify-end ">
                  <p className="text-black text-[35px] font-semibold ">60$</p>
                  <s className="text-[#8B8B8B] font-semibold ">120$</s>
                </div>
              </div>
              <img
                src="/img/row products/5.jpg"
                alt="product"
                className="w-[79px] h-[175px] mt-4"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex flex-col-reverse items-center">
              <div className="flex felx-row items-center justify-around w-full h-[40%] ">
                <p className="font-semibold text-white text-[24px] bg-[#F29AA7] rounded-[40px] w-[65px] h-[35px]">
                  25%
                </p>
                <div className="flex flex-col justify-end ">
                  <p className="text-black text-[35px] font-semibold ">60$</p>
                  <s className="text-[#8B8B8B] font-semibold ">120$</s>
                </div>
              </div>
              <img
                src="/img/row products/5.jpg"
                alt="product"
                className="w-[79px] h-[175px] mt-4"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
