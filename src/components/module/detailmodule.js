import React from "react";

const DetailModule = ({ text }) => {
  return (
    <div
      className="w-[220px] h-[272px] rounded-3xl overflow-hidden border-[2px] border-[#FAFAFA] cursor-pointer text-primary"
      style={{
        boxShadow:
          "0px 1px 1px 0 rgba(34,37,30,0.04), 0px 3px 20px 0 rgba(52,53,49,0.05)",
      }}
    >
      <img
        src={`images/${text}.png`}
        alt="module"
        className="object-cover w-full h-[200px]"
      />
      <div className="flex w-[220px] h-[72px] items-center justify-center p-8">
        <span className="text-xl font-normal">{text}</span>
      </div>
    </div>
  );
};

export default DetailModule;
