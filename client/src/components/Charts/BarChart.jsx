import ProgressBar from "./ProgressBar ";

const BarChart = () => {
  const data = [
    {
      label: "Data-0",
      value: 50,
      color: "blue",
    },
    {
      label: "Data-1",
      value: 50,
      color: "sky",
    },
    {
      label: "Data-2",
      value: 50,
      color: "green",
    },
  ];
  return (
    <div className="space-y-4 h-[400px]">
      {
        data.map((value,index)=>(
          <ProgressBar label={value.label} value={value.value} color={value.color} key={index}/>
        ))
      }
      
    </div>
  );
};

export default BarChart;
