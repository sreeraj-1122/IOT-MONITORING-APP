import React, {  useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import uptimeData from '../../assets/sample-datasets/uptimeData.json';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UptimeChart = () => {
  const [data, setData] = useState(uptimeData);

  const calculatePercentages = () => {
    const totalDuration = data.reduce((acc, curr) => acc + curr.duration, 0);
    return data.map(item => ({
      event: item.event,
      percentage: (item.duration / totalDuration) * 100
    }));
  };

  const getStatusColor = (event) => {
    switch (event) {
      case 'connected':
        return 'bg-green-500';
      case 'disconnected':
        return 'bg-red-500';
      default:
        return 'bg-gray-200';
    }
  };

  const percentages = calculatePercentages();

  return (
    <div className="mt-1 border border-blue-200 md:p-4 p-2 rounded-sm">
      <div className="text-sm text-[#1E1E1E] mb-3">Uptime Data</div>
      <div className="h-14 flex rounded-md overflow-hidden">
        {percentages.map((item, index) => (
          <div
            key={index}
            className={`${getStatusColor(item.event)}`}
            style={{ width: `${item.percentage}%` }}
          />
        ))}
      </div>
      <hr className='w-full h-[2px] bg-[#333333] my-3'/>
      <div className="flex justify-between md:text-sm text-xs  text-gray-700 mt-1">
        {Array.from({ length: 24 }, (_, i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    </div>
  );
};

export default UptimeChart;