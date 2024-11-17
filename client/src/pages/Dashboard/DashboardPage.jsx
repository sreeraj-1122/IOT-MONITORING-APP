import React, { useEffect } from "react";
import LineChart from "../../components/Charts/LineChart";
import BarChart from "./../../components/Charts/BarChart";
import DeviceList from "./../../components/Dashboard/DeviceList";
import DoughnutChart from "../../components/Charts/DoughnutChart ";
import { useBreadcrumb } from "../../contexts/BreadcrumbContext";

const DashboardPage = () => {
  const { updateBreadcrumb } = useBreadcrumb(); 
  useEffect(() => {
    updateBreadcrumb("Dashboard");
  }, []);

  
  return (
    <div className="w-full pt-10">
      <LineChart />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:m-10 pt-20 m-2  ">
       <BarChart value="flex-col"/>
        <DoughnutChart/>
        <DeviceList />
      </div>
    </div>
  );
};

export default DashboardPage;
