import React, { useState } from "react";
import { MainLayout } from "../mainlayout/mainlayout";
import Header from "../components/header/header";
import ChooseModule from "./choosemodule";
import Sensory from "./sensory";
import SubmitConfirm from "./submitconfirm";
const Main = () => {
  const [step, setStep] = useState(1);
  const [clickedItem, setClickedItem] = useState(null);
  return (
    <MainLayout>
      <div className="flex flex-col w-full h-full font-bold font-Inter pl-4 pr-8">
        <div className="flex flex-col w-full h-full">
          <Header
            text={step === 1 ? "Choose Module" : "Sensory Test Design"}
            step={step}
            backToModules={() => {
              setStep(1);
              setClickedItem(null);
            }}
          ></Header>
          {step === 1 ? (
            <ChooseModule
              onItemClicked={(clickedItem) => {
                setStep(2);
                setClickedItem(clickedItem);
              }}
            ></ChooseModule>
          ) : step === 2 ? (
            <Sensory
              clickedItem={clickedItem}
              submit={() => {
                setStep(3);
              }}
            ></Sensory>
          ) : (
            <SubmitConfirm
              gotoViewTest={() => {
                setStep(1);
              }}
            ></SubmitConfirm>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Main;
