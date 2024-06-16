import NextBreadcrumb from "@/app/components/NextBreadcrumb";
import Store_articel from "./storeArticle/Store_articel";

const Page = () => {
  return (
    <main className="w-full h-screen flex flex-col">
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
      <Store_articel />
    </main>
  );
};

export default Page;
