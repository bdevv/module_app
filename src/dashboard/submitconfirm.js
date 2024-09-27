import React from "react";
import Icon from "../mainlayout/icons";

const SubmitConfirm = ({ gotoViewTest }) => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div
        className="flex flex-col justify-start items-center w-[498px] h-[456px] gap-4 p-16 rounded-[32px] bg-white border border-[#f2f2f2]"
        style={{
          boxShadow:
            "0px 1px 1px 0 rgba(34,37,30,0.04), 0px 4px 40px 0 rgba(52,53,49,0.05)",
        }}
      >
        <Icon text={"Check"}></Icon>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[370px] text-[32px] font-bold text-center text-[#272a22]">
          Your test is prepped
        </p>
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
          <p className="flex-grow-0 flex-shrink-0 text-base text-center text-[#272a22]">
            Unique Test Code
          </p>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-1">
            <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-1 rounded-lg bg-[#f4fce8]">
              <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-[#272a22]">
                2e10
              </p>
            </div>
            <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 p-1 rounded-lg bg-[#adeb47]">
              <Icon text={"Copy"}></Icon>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
          <button
            className="w-[206px] h-[56px] rounded-[80px] bg-[#adeb47] hover:bg-[#caff74] text-base font-Inter font-semibold mt-12"
            onClick={gotoViewTest}
          >
            View Test
          </button>
        </div>
        <p className="flex-grow-0 flex-shrink-0 w-[90px] text-base font-normal text-left text-[#5c6350] underline cursor-pointer hover:font-bold">
          Test Details
        </p>
      </div>
    </div>
  );
};

export default SubmitConfirm;
