import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        labels: ['Online', 'Offline'],
        datasets: [
          {
            label: 'Status',
            data: [70, 30], 
            backgroundColor: ['#28a745', '#dc3545'], 
            hoverBackgroundColor: ['#28a745', '#dc3545'],
          },
        ],
      };
      setChartData(data);
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', 
        labels: {
          boxWidth: 12, 
          boxHeight: 12, 
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`; 
          },
        },
      },
    },
  };

  return (
    <div className="border border-customDark rounded-lg p-4 flex justify-center items-center flex-col h-[400px]">
      <h2 className="text-sm font-medium mb-4 mt-4 self-start text-[#1E1E1E]">Device Availability</h2> 
      {chartData ? (
        <div className="w-full h-full flex justify-center items-center p-5">
          <Doughnut data={chartData} options={options} height={400} width={400} /> 
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          Loading...
        </div>
      )}
    </div>
  );
};

export default DoughnutChart;
