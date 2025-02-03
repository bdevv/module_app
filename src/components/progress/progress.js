import React from "react";

const Progress = ({ step }) => {
  return (
    <div className="flex flex-row-reverse justify-center items-center flex-grow-0 flex-shrink-0 w-[74px] h-8 relative gap-2.5">
      <svg
        width="74"
        height="32"
        viewBox="0 0 74 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37 18C34.0731 18 31.7047 20.2559 30.4416 22.8963C27.8657 28.2808 22.3672 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C22.3672 0 27.8657 3.71924 30.4416 9.10374C31.7047 11.7441 34.0731 14 37 14C39.9269 14 42.2953 11.7441 43.5584 9.10374C46.1343 3.71924 51.6328 0 58 0C66.8366 0 74 7.16344 74 16C74 24.8366 66.8366 32 58 32C51.6328 32 46.1343 28.2808 43.5584 22.8963C42.2953 20.2559 39.9269 18 37 18Z"
          fill="url(#paint0_linear_1_170)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_1_170"
            x1="0"
            y1="20"
            x2="74"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0.4"
              stopColor={step === 1 ? "#E2FFB2" : "#F3F4F1"}
            ></stop>
            <stop
              offset="0.55"
              stopColor={step === 1 ? "#F3F4F1" : "#E2FFB2"}
            ></stop>
          </linearGradient>
        </defs>
      </svg>
      <p
        className={`flex-grow w-8 text-xs text-center ${
          step === 1 ? "text-primary" : "text-[#8d8f8a]"
        } absolute left-0`}
      >
        1
      </p>
      <p
        className={`flex-grow w-8 text-xs text-center ${
          step === 2 ? "text-primary" : "text-[#8d8f8a]"
        } absolute right-0`}
      >
        2
      </p>
    </div>
  );
};

export default Progress;
