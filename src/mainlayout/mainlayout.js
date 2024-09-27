import React from "react";
import Sidebar from "../components/sidebar/sidebar";
export const MainLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-100">
      <div className="flex w-[1280px] h-[832px] bg-white">
        <div className="w-[324px] border border-l-0 border-b-0 border-t-0 border-r-[#EDEDED]">
          <Sidebar />
        </div>
        <div className="flex flex-1 w-full h-full max-h-[100vh] overflow-x-hidden overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
