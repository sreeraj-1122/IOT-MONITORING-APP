import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import data0 from "../../assets/sample-datasets/data_0.json";
import data1 from "../../assets/sample-datasets/data_1.json";
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
    const hours = data0.map((item) => item.hour);
    const data0Values = data0.map((item) => item.data);
    const data1Values = data1.map((item) => item.data);

    const data2Values = data0Values.map((value, index) => value + data1Values[index]);

    setChartData({
      labels: hours,
      datasets: [
        {
          label: "Data-0",
          data: data0Values,
          borderColor: "#6975FF",
          backgroundColor: "#6975FF",
          tension: 0.3,
        },
        {
          label: "Data-1",
          data: data1Values,
          borderColor: "#64BDC6",
          backgroundColor: "#64BDC6",
          tension: 0.3,
        },
        {
          label: "Data-2",
          data: data2Values,
          borderColor: "#084FD7",
          backgroundColor: "#084FD7",
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
        max: 60, 
        ticks: {
          stepSize: 10,
        },
        grid: {
          display: true,
          color: "rgba(200, 200, 200, 0.5)",
        },
      },
    },
  };

  return (
    <div className="h-[400px] md:px-10 p-2">
      <div className="border border-customDark p-3 rounded-lg">
        <p className="text-sm font-medium text-[#1E1E1E]">Daily Trend</p>
        <div className="flex items-center h-full p-2 ">
          {chartData ? (
            <Line data={chartData} options={options} height={400} />
          ) : (
            <div className="m-auto font-bold mt-5 text-2xl">Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LineChart;
