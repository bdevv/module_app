import React from "react";
import Icon from "../../mainlayout/icons";
import Progress from "../progress/progress";

const Header = ({ text, step, backToModules }) => {
  return step !== 3 ? (
    <div className="flex w-full h-[120px] items-end mb-2 pb-4 border-x-0 border-t-0 border-b-[2px] border-[#EDEDED] text-primary">
      <div className="flex w-full h-[40px] ml-8 items-center">
        {step !== 1 ? (
          <div
            className="flex w-[200px] h-[32px]  items-center cursor-pointer"
            onClick={backToModules}
          >
            <Icon text={"Back"}></Icon>
            <span className="flex w-full text-base text-[#8D8F8A] font-Inter font-normal leading-6 text-center justify-center hover:font-bold hover:text-[#555753]">
              Back to Modules
            </span>
          </div>
        ) : null}
        <span className="w-full text-4xl font-bold leading-10 text-center justify-center ">
          {text}
        </span>
      </div>
      <Progress step={step}> </Progress>
    </div>
  ) : null;
};

export default Header;
