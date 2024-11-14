import React from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ToolBar = ({isOpen,setIsopen}) => {
  return (
    <div className="w-full h-[48px] border-b-[1px] border-customDark shadow flex items-center ps-8">
      <span className="text-xl mr-4 cursor-pointer" onClick={()=>setIsopen(!isOpen)}>
        <IoMenuSharp />
      </span>

      <div className="flex items-center text-gray-900">
        <span className="text-sm font-medium">Dashboard</span>
        <span className="mx-1 text-gray-900 text-lg">
          <MdOutlineKeyboardArrowRight />
        </span>
        <span className="text-sm font-medium">Current Page</span>
      </div>
    </div>
  );
};

export default ToolBar;
