import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import eventData from "../../assets/sample-datasets/uptimeData.json";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const connectedDuration = eventData
      .filter((event) => event.event === "connected")
      .reduce((acc, curr) => acc + curr.duration, 0);

    const disconnectedDuration = eventData
      .filter((event) => event.event === "disconnected")
      .reduce((acc, curr) => acc + curr.duration, 0);

    const data = {
      labels: ["Online", "Offline"],
      datasets: [
        {
          label: "Device Availability",
          data: [connectedDuration, disconnectedDuration],
          backgroundColor: ["#28a745", "#dc3545"],
          hoverBackgroundColor: ["#218838", "#c82333"],
        },
      ],
    };

    setChartData(data);
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
          boxHeight: 12,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const total = tooltipItem.dataset.data.reduce((acc, val) => acc + val, 0);
            const value = tooltipItem.raw;
            const percentage = ((value / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="border border-customDark rounded-lg p-4 flex justify-center items-center flex-col h-[400px]">
      <h2 className="text-sm font-medium mb-4 mt-4 self-start text-[#1E1E1E]">
        Device Availability
      </h2>
      {chartData ? (
        <div className="w-full h-full flex justify-center items-center p-5">
          <Doughnut data={chartData} options={options} height={400} width={400} />
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">Loading...</div>
      )}
    </div>
  );
};

export default DoughnutChart;
