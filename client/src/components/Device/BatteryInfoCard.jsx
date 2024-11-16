import React from "react";
import { FaBatteryThreeQuarters } from "react-icons/fa";

const BatteryInfoCard = ({ charge, temperature }) => {
  return (
    <div className="border border-customDark w-[250px] h-[100px] rounded-lg p-3 flex flex-col gap-2 text-sm text-[#666666]">
      <div className="flex gap-2 items-center">
        <FaBatteryThreeQuarters className="text-[#1E1E1E] text-lg" />
        <span>Battery Info</span>
      </div>
      <div>Charge: {charge}</div>
      <div>Temperature: {temperature}</div>
    </div>
  );
};

export default BatteryInfoCard;
