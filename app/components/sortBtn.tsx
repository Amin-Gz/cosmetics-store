import React from "react";

type content = {
  text?: string;
};

const SortBtn = ({ text }: content) => {
  return (
    <button className="h-[54px] rounded-[14px] bg-[#D9D9D9] text-[28px] text-[#757575] focus:bg-[#F29AA7] focus:text-white px-6 mr-2">
      {text}
    </button>
  );
};

export default SortBtn;
