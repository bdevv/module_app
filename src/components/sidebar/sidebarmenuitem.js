import React from "react";
import Icon from "../../mainlayout/icons";

const SidebarMenuItem = ({ text, active }) => {
  return (
    <div
      className={`flex w-[292px] h-[72px] ${
        active ? "bg-[#E2FFB2] border-r-8 border-r-[#ADEB47] " : ""
      } border-t-0 border-l-0 border-b-0 items-center p-8 rounded-l-xl mt-1 hover:bg-[#f2ffdd] hover:border-r-8 hover:border-r-[#aceb47b7] cursor-pointer`}
    >
      <div className="w-[24px] h-[24px]">{<Icon text={text}></Icon>}</div>
      <span className="font-Inter text-base ml-2">{text}</span>
    </div>
  );
};

export default SidebarMenuItem;
