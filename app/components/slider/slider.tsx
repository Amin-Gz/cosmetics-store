"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./style.css";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <div className="h-[638px] w-full mt-24  mx-auto  ">
      <Swiper
        navigation={true}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Scrollbar, Autoplay]}
        scrollbar={{ draggable: true }}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="w-[90%] flex justify-center">
            <Image
              src={"/img/slide2.jpg"}
              width={1678}
              height={638}
              alt="slide2-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[90%] flex justify-center">
            <Image
              src={"/img/slide1.jpg"}
              width={1678}
              height={638}
              alt="slide1-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[90%] flex justify-center">
            <Image
              src={"/img/slide3.jpg"}
              width={1678}
              height={638}
              alt="slide3-img"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
