import React from "react";
import { FaUsb } from "react-icons/fa";

const USBDevicesCard = ({ devices }) => {
  return (
    <div className="border border-customDark w-[250px] h-[100px] rounded-lg p-3 flex flex-col gap-2 text-sm text-[#666666]">
      <div className="flex gap-2 items-center">
        <FaUsb className="text-[#1E1E1E] text-lg" />
        <span>USB Devices</span>
      </div>
      {devices.map((device, index) => (
        <div key={index} className="flex gap-2 items-center">
          <span className="w-3 h-3 bg-[#3AE169] rounded-full"></span>
          <span>{device}</span>
        </div>
      ))}
    </div>
  );
};

export default USBDevicesCard;
