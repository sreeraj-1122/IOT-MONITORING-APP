import React, { useEffect } from "react";
import LineChart from "../../components/Charts/LineChart";
import BarChart from "./../../components/Charts/BarChart";
import DeviceList from "./../../components/Dashboard/DeviceList";
import DoughnutChart from "../../components/Charts/DoughnutChart ";

const DashboardPage = () => {
  
  return (
    <div className="w-full">
      <LineChart />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:m-10 m-2  ">
        <BarChart />
        <DoughnutChart/>
        <DeviceList />
      </div>
    </div>
  );
};

export default DashboardPage;
