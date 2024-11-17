import React from "react";
import data0 from "../../assets/sample-datasets/data_0.json";
import data1 from "../../assets/sample-datasets/data_1.json";
import ProgressBar from './ProgressBar ';

const BarChart = ({value}) => {
  const data0Total = data0.reduce((acc, item) => acc + item.data, 0);
  const data1Total = data1.reduce((acc, item) => acc + item.data, 0);
  const data2Total = data0Total + data1Total; 

  const grandTotal = data0Total + data1Total + data2Total;

  const data = [
    {
      label: "Data-0",
      value: ((data0Total / grandTotal) * 100).toFixed(0), 
      color: "#6975FF",
    },
    {
      label: "Data-1",
      value: ((data1Total / grandTotal) * 100).toFixed(0), 
      color: "#64BDC6",
    },
    {
      label: "Data-2",
      value: ((data2Total / grandTotal) * 100).toFixed(0), 
      color: "#084FD7",
    },
  ];

  return (
    <div className={`w-full flex ${value}  gap-4`}>
      {data.map((item, index) => (
        <ProgressBar
          label={item.label}
          value={item.value}
          color={item.color}
          key={index}
        />
      ))}
    </div>
  );
};

export default BarChart;
