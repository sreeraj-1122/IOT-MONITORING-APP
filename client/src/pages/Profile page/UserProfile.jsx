import React, { useContext, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import AuthContext from "../../contexts/AuthContext";
import { useBreadcrumb } from "../../contexts/BreadcrumbContext";

const UserProfile = () => {
  const { user, logout } = useContext(AuthContext);
  const { updateBreadcrumb } = useBreadcrumb(); 

  useEffect(() => {
    updateBreadcrumb("Profile");
  }, []);
  return (
    <div className="flex justify-center w-full h-screen">
      <div className="flex flex-col items-center mt-6 gap-2">
        <span className="bg-[#d1d0d0] w-24 h-24 flex items-center justify-center text-6xl rounded-full">
          <FaUser />
        </span>
        <div className="flex flex-col text-sm gap-1 w-[320px] mb-1">
          <label htmlFor="username" className=" text-[#666666]">
            Username
          </label>
          <input
            type="text"
            value={user?.name || ""}
            readOnly
            id="username"
            className="p-2 border border-customDark rounded-md px-2 "
          />
        </div>
        <div className="flex flex-col gap-1 w-[320px] text-sm">
          <label htmlFor="email" className=" text-[#666666]">
            Email
          </label>
          <input
            type="text"
            value={user?.email || ""}
            readOnly
            id="email"
            className="p-2 border border-customDark rounded-md px-2"
          />
        </div>
        <button
          className="border border-[#DD3030] text-[#DD3030] hover:bg-[#DD3030] hover:text-white px-4 py-1 mt-2 rounded-md text-sm"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
