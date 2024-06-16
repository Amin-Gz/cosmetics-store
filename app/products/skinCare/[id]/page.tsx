import NextBreadcrumb from "@/app/components/NextBreadcrumb";
import React from "react";

const Page = () => {
  return (
    <main className="w-full flex flex-col">
      <NextBreadcrumb
        homeElement={"Home"}
        separator={
          <img
            src="/svg/rightarow-icon.svg"
            alt="right-arrow-con"
            className="w-[24px]"
          />
        }
        activeClasses="text-[#0000008A] text-[32px]"
        containerClasses="w-[89%] mx-auto flex flex-row items-center py-5  "
        listClasses="hover:underline mx-2 font-bold"
        capitalizeLinks
      />
      <div className="w-[88%] h-[1100px] flex flex-row flex-wrap justify-between mx-auto ">
        <div className="w-[650px] h-[572px] flex  flex-row justify-between ">
          <div className="h-full flex flex-col justify-center items-center">
            <button className="w-[107px] h-[107px] bg-[#FFEFEF] flex items-center justify-center rounded-2xl mb-10 active:bg-[#ffdce2]">
              <img src="/svg/heart-icon.svg" alt="heart-icon" />
            </button>
            <button className="w-[107px] h-[107px] bg-[#FFEFEF] flex items-center justify-center rounded-2xl mb-10 hover:bg-[#ffdce2] ">
              <img src="/svg/share-icon.svg" alt="share-icon" />
            </button>
          </div>

          <img src="/img/product1.jpg" alt="product-img" />
        </div>
        <div className="w-[946px] h-[572px] bg-[#FFFAFA] border border-[#F29AA7] rounded-[66px]">
          <div className="p-10">
            {/* product name */}
            <p className="text-[35px]">Matte floral pancake</p>
            {/* product id  */}
            <p className="text-[35px] text-[#CCCCCC]">Product ID : 654659</p>
            {/* product discription */}
            <p className="text-[35px] mt-5">
              Floral pancake, which is made of natural materials, is soft, very
              light on the skin and does not feel heavy on the skin in any way.
              Also, this pancake does not dry the skin, does not rub on the
              skin, has a high durability and a velvety and natural look. gives
              to the face
            </p>
            {/* product rate */}
            <p className="w-[75%] text-[35px] flex flex-row justify-between items-center mt-7">
              Product rating
              <span className=" flex flex-row justify-around">
                <img src="/svg/Star.svg" alt="rate-icon" />
                <img src="/svg/Star.svg" alt="rate-icon" />
                <img src="/svg/Star.svg" alt="rate-icon" />
                <img src="/svg/Star.svg" alt="rate-icon" />
                <img src="/svg/Star.svg" alt="rate-icon" />
              </span>
              <span className="text-[28px]">20 person</span>
            </p>
          </div>
        </div>
        <div className="w-[676px] h-[368px] flex flex-col items-center justify-around bg-[#FFFAFA] border border-[#F7BECB] rounded-[66px]">
          <div className="w-[80%] flex flex-row justify-between items-center">
            {/* real price */}
            <del className="text-[96px] text-[#f8cad6] font-bold">120$</del>
            {/* off percent */}
            <p className="w-[104px] h-[56px] bg-[#F29AA7] text-[40px] text-center text-white rounded-[40px] font-semibold">
              25%
            </p>
            {/* price */}
            <p className="text-[96px] text-[#F29AA7] font-bold">67$</p>
          </div>
          <button className="w-[308px] h-[89px] bg-[#F29AA7] text-white text-[50px] font-semibold rounded-[66px] active:bg-[#f8cad6]">
            Add to cart
          </button>
        </div>
        <div className="w-[946px] h-[368px] flex flex-row items-center justify-around bg-[#FFFAFA] border border-[#F7BECB] rounded-[66px]">
          <div className="w-[45%] h-[80%] flex flex-col justify-around items-start">
            <div className=" flex flex-row justify-around items-center ">
              <img src="/svg/seller-icon.svg" alt="seller-icon" />
              <p className="text-[45px] font-medium">Seller : sorme </p>
            </div>
            <div className=" flex flex-row justify-around items-center ">
              <img src="/svg/brand-icon.svg" alt="seller-icon" />
              <p className="text-[45px] font-medium">Brand : Follero </p>
            </div>
          </div>
          <hr className=" w-[6px] h-[80%] bg-[#F29AA7]" />
          <div className=" w-[45%] flex flex-row justify-around items-center ">
            <img src="/svg/free-icon.svg" alt="seller-icon" />
            <p className="text-[45px] font-medium">Free shipping to New York</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
