import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const LocationCard = ({ location }) => {
  return (
    <div className="border border-customDark w-[250px] h-[100px] rounded-lg p-3 flex flex-col gap-2 text-sm text-[#666666]">
      <div className="flex gap-1 items-center">
        <IoLocationSharp className="text-[#1E1E1E]" />
        <span>Location</span>
      </div>
      <div className="text-[12px]">{location.building}</div>
      <div className="text-[12px]">
        {`${location.city}, ${location.district}, ${location.state}, ${location.country}, ${location.pinCode}`}
      </div>
    </div>
  );
};

export default LocationCard;
