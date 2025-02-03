import React, { useState } from "react";
import DetailModule from "../components/module/detailmodule";
import Icon from "../mainlayout/icons";

const Sensory = ({ clickedItem, submit }) => {
  const [selectedOption, setSelectedOption] = useState(2);
  return (
    <div className="flex w-full mt-8 ml-12 text-primary">
      <div className="w-[220px] h-full ">
        <DetailModule text={clickedItem}></DetailModule>
      </div>
      <div className="flex flex-col w-full h-full ml-8 text-start">
        <span className="font-Inter text-sm font-semibold mb-2">
          Test Title
        </span>
        <input
          type="text"
          placeholder="Test Title"
          className="w-[395px] h-[56px] font-Inter font-normal text-base rounded-lg bg-white border border-[#e7e7e7] p-4 mb-2"
        />
        <span className="font-Inter text-sm font-semibold mb-2 mt-4">
          Test Description
        </span>
        <div className="w-[395px] h-[200px] mb-2">
          <textarea
            className="w-[395px] h-[200px] font-Inter font-normal text-base text-left p-4 rounded-lg bg-white border border-[#e7e7e7]"
            placeholder="Test Description"
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <span className="font-Inter text-sm font-semibold mb-2 mt-4">
          Target Attribute
        </span>
        <div
          className="flex  items-center cursor-pointer"
          onClick={() => {
            setSelectedOption(0);
          }}
        >
          <Icon
            text={selectedOption === 0 ? "OptionSelected" : "Option"}
          ></Icon>
          <span className="text-base font-normal font-Inter ml-2">Flavor</span>
        </div>
        <div
          className="flex  items-center cursor-pointer"
          onClick={() => {
            setSelectedOption(1);
          }}
        >
          <Icon
            text={selectedOption === 1 ? "OptionSelected" : "Option"}
          ></Icon>
          <span className="text-base font-normal font-Inter ml-2">Texture</span>
        </div>
        <div
          className="flex  items-center cursor-pointer"
          onClick={() => {
            setSelectedOption(2);
          }}
        >
          <Icon
            text={selectedOption === 2 ? "OptionSelected" : "Option"}
          ></Icon>
          <span className="text-base font-normal font-Inter ml-2">
            Overall Sensory Perception
          </span>
        </div>
        <button
          className="w-[183px] h-[56px] rounded-[80px] bg-[#adeb47] hover:bg-[#caff74] text-base font-semibold mt-12"
          onClick={submit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Sensory;
