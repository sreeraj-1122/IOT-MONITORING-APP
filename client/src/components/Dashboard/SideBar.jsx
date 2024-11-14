import React from 'react';

const SideBar = () => {
  return (
    <div className="w-[200px] h-screen border border-customDark bg-[#FBF7FA]">
      <p className="text-black text-sm font-normal ps-8 mt-4 hover:bg-gray-200 hover:text-blue-600 hover:font-medium cursor-pointer py-2">
        Dashboard
      </p>
      <p className="text-black text-sm font-normal ps-8 mt-4 hover:bg-gray-200 hover:text-blue-600 hover:font-medium cursor-pointer py-2">
        Devices
      </p>
    </div>
  );
};

export default SideBar;
