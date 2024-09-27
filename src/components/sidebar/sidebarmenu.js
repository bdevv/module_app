import React from "react";
import SidebarMenuItem from "./sidebarmenuitem";
import Icon from "../../mainlayout/icons";
const SidebarMenu = () => {
  return (
    <div className="flex flex-col w-full h-[832px] ml-8 justify-between text-primary">
      <div className="mt-20">
        <SidebarMenuItem
          text={"Testing Modules"}
          active={true}
        ></SidebarMenuItem>
        <SidebarMenuItem text={"Results Dashboard"}></SidebarMenuItem>
        <SidebarMenuItem text={"Settings"}></SidebarMenuItem>
      </div>
      <div className="flex w-[292px] h-[24px] mb-8 cursor-pointer">
        <span className="text-[#5C6350] font-Inter text-base ">Logout</span>
        <div className="ml-2">
          <Icon text="Logout"></Icon>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
