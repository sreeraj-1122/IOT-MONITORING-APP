import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBreadcrumb } from '../../contexts/BreadcrumbContext';

const SideBar = ({ isOpen, closeSidebar }) => {
  const navigate = useNavigate();
  const { updateBreadcrumb } = useBreadcrumb();

  const handleNavigation = (path) => {
    navigate(path);
    if (path === '/dashboard') {
      updateBreadcrumb('Dashboard'); 
    } else if (path === '/dashboard/devices') {
      updateBreadcrumb('Devices'); 
    }
    closeSidebar(); 
  };

  return (
    <div className={`w-[200px] min-h-screen border border-customDark bg-[#FBF7FA] ${isOpen ? 'block' : 'hidden'}`}>
      <p
        className="text-black text-sm font-normal ps-8 mt-4 hover:bg-gray-200 hover:text-blue-600 hover:font-medium cursor-pointer py-2"
        onClick={() => handleNavigation('/dashboard')}
      >
        Dashboard
      </p>
      <p
        className="text-black text-sm font-normal ps-8 mt-4 hover:bg-gray-200 hover:text-blue-600 hover:font-medium cursor-pointer py-2"
        onClick={() => handleNavigation("/dashboard/devices")}
      >
        Devices
      </p>
    </div>
  );
};

export default SideBar;
