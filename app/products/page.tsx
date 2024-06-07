import Link from "next/link";

import NextBreadcrumb from "../components/NextBreadcrumb";

export default function Page() {
  return (
    <div className=" h-96 bg-blue-300">
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
    </div>
  );
}
