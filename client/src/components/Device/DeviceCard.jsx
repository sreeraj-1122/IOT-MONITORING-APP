import React from "react";
import { FaSimCard } from "react-icons/fa";
import { FaBatteryThreeQuarters } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { FaUsb } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const DeviceCard = ({
  deviceName,
  sim,
  location,
}) => {
  const { signalStrength, operator, networkBand } = sim;
  const { city, district, state, country, pinCode } = location;
  return (
    <div className="border border-customDark w-[396px] h-[100px] rounded-lg px-2 py-1 mt-5  ">
      <div className="flex justify-between items-center mb-1 text-[#1E1E1E]">
        <span className="text-sm font-medium ">{deviceName}</span>
        <div className="flex items-center gap-2">
          <span>
            <FaUsb />
          </span>
          <span>
            <FaSignal />
          </span>
          <span className="text-2xl">
            <FaBatteryThreeQuarters />
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-[#666666]">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span>Offline</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-[#666666]">
        <span>
          <IoLocationSharp />
        </span>
        <span>
          {city}, {district}, {state}, {country}, {pinCode}
        </span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-[#1E1E1E]">
          <FaSimCard />
        </span>
        <span className="text-[#666666]">
          {operator} ({signalStrength} - {networkBand})
        </span>
      </div>
    </div>
  );
};

export default DeviceCard;
