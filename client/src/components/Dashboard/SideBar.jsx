import React from "react";
import { useNavigate } from "react-router-dom";
import { useBreadcrumb } from "../../contexts/BreadcrumbContext";

const SideBar = ({ isOpen, closeSidebar }) => {
  const navigate = useNavigate();
  const { updateBreadcrumb } = useBreadcrumb();

  const menuItems = [
    { label: "Dashboard", path: "/dashboard", breadcrumb: "Dashboard" },
    { label: "Devices", path: "/dashboard/devices", breadcrumb: "Devices" },
  ];

  const handleNavigation = (path, breadcrumb) => {
    navigate(path);
    updateBreadcrumb(breadcrumb);
    closeSidebar();
  };

  return (
    <div
      className={`fixed md:relative z-50 bg-[#FBF7FA] border border-customDark transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-[200px] min-h-screen`}
      aria-hidden={!isOpen}
      aria-expanded={isOpen}
    >
      {menuItems.map((item) => (
        <p
          key={item.path}
          className="text-black text-sm font-normal ps-8 mt-4 hover:bg-gray-200 hover:text-blue-600 hover:font-medium cursor-pointer py-2"
          onClick={() => handleNavigation(item.path, item.breadcrumb)}
        >
          {item.label}
        </p>
      ))}
    </div>
  );
};

export default SideBar;
