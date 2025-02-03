import React from "react";
import Module from "../components/module/module";
const data = [
  {
    text: "Food Testing",
    image_url: "Food Testing.png",
  },
  {
    text: "Exit Interview",
    image_url: "Exit Interview.png",
  },
  {
    text: "Employee Morale",
    image_url: "Employee Morale.png",
  },
  {
    text: "Event Planning",
    image_url: "Event Planning.png",
  },
  {
    text: "Clinical Trials",
    image_url: "Clinical Trials.png",
  },
];
const ChooseModule = ({ onItemClicked }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mx-8 mt-8">
      {data.map((item, index) => (
        <Module
          text={item.text}
          key={index}
          image_url={item.image_url}
          onClick={() => {
            onItemClicked(item.text);
          }}
        ></Module>
      ))}
    </div>
  );
};

export default ChooseModule;
