import React from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useBreadcrumb } from '../../contexts/BreadcrumbContext';

const ToolBar = ({isOpen,setIsopen}) => {
  const { breadcrumb, updateBreadcrumb } = useBreadcrumb(); 

  return (
    <div className="w-full h-[48px] border-b-[1px] border-customDark shadow flex items-center ps-8">
      <span className="text-xl mr-4 cursor-pointer" onClick={()=>setIsopen(!isOpen)}>
        <IoMenuSharp />
      </span>

      <div className="flex items-center text-gray-900">
      {breadcrumb.map((item, index) => (
          <React.Fragment key={index}>
            <span className="text-sm font-medium">{item}</span>
            {index < breadcrumb.length - 1 && (
              <span className="mx-1 text-gray-900 text-lg">
                <MdOutlineKeyboardArrowRight />
              </span>
            )}
          </React.Fragment>
        ))}
       
      </div>
    </div>
  );
};

export default ToolBar;
