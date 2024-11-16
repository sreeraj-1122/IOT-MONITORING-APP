import React from "react";

const DeviceStatusCard = ({ deviceName, status, lastConnected }) => {
  return (
    <div className="flex flex-col justify-between border border-customDark w-[250px] h-[100px] rounded-lg p-2">
      <div className="text-[#1E1E1E] text-[16px] font-normal">{deviceName}</div>
      <div className="text-[#666666] text-[12px] flex items-center gap-[6px] font-normal">
        <span className={`w-3 h-3 rounded-full ${status === "Offline" ? "bg-red-500" : "bg-green-500"}`}></span>
        <span>{status}</span>
      </div>
      <div className="text-[#666666] text-[12px]">Last connected at {lastConnected}</div>
    </div>
  );
};

export default DeviceStatusCard;
