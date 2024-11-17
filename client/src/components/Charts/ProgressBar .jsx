import React from "react";

const ProgressBar = ({ label, value, color }) => {
  return (
    <div className="border border-customDark rounded-lg px-4 py-4 w-full   ">
      <div className="flex items-center gap-2 ">
        <span
          className={`w-4 h-4 bg-${color}-500`}
          style={{ backgroundColor: `${color}` }}
        ></span>
        <span className="font-medium text-[#1E1E1E] text-sm">{label}</span>
      </div>
      <div className="flex justify-end  mb-2 ">
        <span className="text-[#333333] text-sm font-medium">{value}%</span>
      </div>
      <div className="h-5 bg-[#D9D9D9] rounded-sm mb-5">
        <div
          className={`h-full bg-${color}-500 rounded-sm `}
          style={{ width: `${value}%`, backgroundColor: `${color}` }}
        ></div>
      </div>
    </div>
  );
};
export default ProgressBar;
