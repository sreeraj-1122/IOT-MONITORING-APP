import React from "react";
import { FaUser } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useBreadcrumb } from "../../contexts/BreadcrumbContext";

const UserHeader = () => {
  const navigate = useNavigate();
  const { updateBreadcrumb } = useBreadcrumb();

  const handleNavigation = (path) => {
      navigate(path);
      updateBreadcrumb('User Details'); 
    }
  return (
    <header className="bg-gray-100 h-[48px] text-white p-4 flex items-center border-b-[1px] border-customDark shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-lg font-bold text-black">
          Panel0
        </Link>
        <nav>
          <div className="flex gap-4 items-center">
            <span className=" bg-customDark w-9 h-9 flex items-center justify-center rounded-full cursor-pointer" onClick={() => handleNavigation('/dashboard/profile')}>
              <FaUser className="text-gray-800 text-lg" />
            </span>
            <a
              href="https://www.estrotech.in/"
              target="_blank"
              className=" bg-customDark w-9 h-9 flex  items-center justify-center rounded-full"
            >
              <RiLogoutBoxRLine className="text-gray-800 text-lg" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default UserHeader;
