"use client";
import SortBtn from "@/app/components/sortBtn";
import { Grid, Pagination } from "swiper/modules";
import React, { useRef, useState } from "react";
import Products from "../products";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./style.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const Store_articel = () => {
  return (
    <article className="w-full flex flex-col items-center ">
      <div className="w-[89%] h-[102px] bg-[#EFEFEF] flex flex-row items-center rounded-md">
        <p className="text-[32px] text-[#757575] mr-12">Order By:</p>
        <SortBtn text="Bestselling" />
        <SortBtn text="Most expensive " />
        <SortBtn text="cheapest" />
        <SortBtn text="Name : A to Z" />
        <SortBtn text="Name : Z to A" />
      </div>
      <div className=" w-[89%] mt-10 flex gap-8 flex-wrap mb-8">
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
    </article>
  );
};

export default Store_articel;
