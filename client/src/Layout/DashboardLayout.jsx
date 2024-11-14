import React from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../components/Dashboard/UserHeader";

const DashboardLayout = () => {
  return (
    <div>
      <UserHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
