import React, { useEffect } from "react";
import DeviceCard from "../../components/Device/DeviceCard";
import deviceData from "../../assets/sample-datasets/deviceData.json";
import { Link } from "react-router-dom";
import { useBreadcrumb } from "../../contexts/BreadcrumbContext";

const DevicePage = () => {
  const { updateBreadcrumb } = useBreadcrumb(); 

  useEffect(() => {
    updateBreadcrumb("Devices");
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-3 justify-items-center px-8">
      {deviceData?.map((device) => (
        <Link to={`/dashboard/devices/${device.deviceName}`} key={device.deviceName}>
          <DeviceCard
            deviceName={device.deviceName}
            sim={device.hw_data.sim}
            location={device.location}
          />
        </Link>
      ))}
    </div>
  );
};

export default DevicePage;
