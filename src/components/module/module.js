import React, { useState } from "react";
import Icon from "../../mainlayout/icons";

const Module = ({ text, image_url, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true); // Change to the desired color
  };

  const handleMouseLeave = () => {
    setHovered(false); // Change back to the initial color
  };
  return (
    <div
      className="w-[270px] h-[300px] hover:bg-[#ADEB47] rounded-3xl overflow-hidden border-[2px] border-[#FAFAFA] cursor-pointer"
      style={{
        boxShadow: "0 3px 1px 20 rgba(34, 35, 31, 0.05)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <img
        src={`images/${image_url}`}
        alt="module"
        className="object-cover w-[270px] h-[220px]"
      />
      <div className="flex w-[270px] h-[80px] items-center justify-between p-8">
        <span className="text-xl font-normal">{text}</span>
        <Icon text={"Arrow"} hovered={hovered}></Icon>
      </div>
    </div>
  );
};

export default Module;
