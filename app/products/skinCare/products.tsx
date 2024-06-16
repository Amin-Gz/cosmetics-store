import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <Link href={"skinCare/1"}>
      <div className=" w-[450px] h-[400px] border rounded-lg px-8">
        <div className="w-full h-full flex flex-row items-end justify-around ">
          <div className="h-full flex flex-col ">
            <img src="/img/product1.jpg" alt="product-img" />
            <p className="text-[28px] font-normal">Fix Arcanil powder</p>
          </div>
          <p className="text-[#F29AA7] text-[40px] font-bold mb-6">60$</p>
          <div className="flex flex-col items-center w-[122px] mb-6">
            <p className="text-[27px] font-normal">20 person</p>
            {/* inja map bezan */}
            <img
              src="/svg/Star.svg"
              alt="star-icon"
              className="w-[56px] mt-1"
            />
            <img
              src="/svg/Star.svg"
              alt="star-icon"
              className="w-[56px] mt-1"
            />
            <img
              src="/svg/Star.svg"
              alt="star-icon"
              className="w-[56px] mt-1"
            />
            <img
              src="/svg/Star.svg"
              alt="star-icon"
              className="w-[56px] mt-1"
            />
            <img
              src="/svg/Star.svg"
              alt="star-icon"
              className="w-[56px] mt-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Products;
