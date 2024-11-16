import React from "react";
import { FaSimCard } from "react-icons/fa";

const CellInfoCard = ({ operator, signalStrength }) => {
  return (
    <div className="border border-customDark w-[250px] h-[100px] rounded-lg p-3 flex flex-col gap-2 text-sm text-[#666666]">
      <div className="flex gap-1 items-center">
        <FaSimCard className="text-[#1E1E1E]" />
        <span>Cell Info</span>
      </div>
      <div>Operator: {operator}</div>
      <div>Signal: {signalStrength}</div>
    </div>
  );
};

export default CellInfoCard;
