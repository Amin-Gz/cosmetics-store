import Link from "next/link";

import NextBreadcrumb from "../components/NextBreadcrumb";

export default function Page() {
  return (
    <div className=" h-96 px-32 my-8">
      <p className="text-semibold text-4xl">
        <Link href={"/store/SkinCare"}>Skin Care</Link>
      </p>
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
      <div className="w-full text-center *:leading-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          et provident! Esse ex voluptates unde praesentium illum soluta dolorum
          ullam aut cupiditate dicta ab laudantium eaque, doloribus, at
          inventore possimus?
        </p>

        <Link
          rel="stylesheet"
          href="products/skinCare"
          className="text-3xl  hover:text-[rgba(214,138,138,0.82)]"
        >
          product details
        </Link>
      </div>
    </div>
  );
}
