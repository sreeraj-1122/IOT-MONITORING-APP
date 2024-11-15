import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import data0 from "../../../public/assets/sample-datasets/data_0.json";
import data1 from "../../../public/assets/sample-datasets/data_1.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Extract data from imported JSON
    const hours = data0.map((item) => item.hour);
    const data0Values = data0.map((item) => item.data);
    const data1Values = data1.map((item) => item.data);

    // Set the chart data
    setChartData({
      labels: hours,
      datasets: [
        {
          label: "Data-0",
          data: data0Values,
          borderColor: "blue",
          backgroundColor: "blue",
          tension: 0.3,
        },
        {
          label: "Data-1",
          data: data1Values,
          borderColor: "skyblue",
          backgroundColor: "skyblue",
          tension: 0.3,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          padding: 20,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
        },
        min: 0,
        max: 22,
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
        },
        min: 0,
        max: 50,
        ticks: {
          stepSize: 5,
        },
        grid: {
          display: true,
          color: "rgba(200, 200, 200, 0.5)",
        },
      },
    },
  };

  return (
    <div className="h-[400px] border border-customDark md:m-10 md:p-4 m-3 p-2">
      <p className="text-sm font-medium text-[#1E1E1E]">Daily Trend</p>
      <div className="flex items-center h-full p-4">
        {chartData ? (
          <Line data={chartData} options={options} height={400} />
        ) : (
          <div className="m-auto font-bold mt-5 text-2xl">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default LineChart;
