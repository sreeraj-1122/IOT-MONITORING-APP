import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../components/Dashboard/UserHeader";
import ToolBar from "../components/Dashboard/ToolBar";
import SideBar from "../components/Dashboard/SideBar";

const DashboardLayout = () => {
  const [isOpen, setIsopen] = useState(false);
  const closeSidebar = () => {
    setIsopen(false); 
  };

  return (
    <div>
      <UserHeader />
      <ToolBar isOpen={isOpen} setIsopen={setIsopen} />
      <main className="min-h-screen  relative">
        <div className="absolute">{isOpen && <SideBar isOpen={isOpen} closeSidebar={closeSidebar}/>}</div>
        <div className="transition-all duration-300">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
