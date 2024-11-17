import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import deviceData from "../../assets/sample-datasets/deviceData.json";
import { useBreadcrumb } from "../../contexts/BreadcrumbContext";
import useFormattedDate from './../../Hooks/useFormattedDate ';
import DeviceStatusCard from "./DeviceStatusCard";
import LocationCard from "./LocationCard";
import CellInfoCard from "./CellInfoCard";
import USBDevicesCard from "./USBDevicesCard ";
import BatteryInfoCard from "./BatteryInfoCard";
import LineChart from './../Charts/LineChart';
import BarChart from "../Charts/BarChart";
import UptimeChart from "../Charts/UptimeChart ";

const DeviceDetails = () => {
  const { name } = useParams();
  const { breadcrumb, updateBreadcrumb, addSubBreadcrumb } = useBreadcrumb();
  const device = deviceData.find((device) => device.deviceName === name);
  const formattedDate = useFormattedDate(device?.connectionStatus.disconnected);
  
  useEffect(() => {
    if (device) {
      updateBreadcrumb("Devices");
      if (!breadcrumb.includes(device.deviceName)) {
        addSubBreadcrumb(device.deviceName);
      }
    }
  }, []);

  if (!device) {
    return <div>Device not found!</div>;
  }

  return (
    <div className="pt-5 flex flex-col gap-4 pb-5">
      <div className="flex gap-2 justify-center flex-wrap ">
        <DeviceStatusCard
          deviceName={device.deviceName}
          status="Offline"
          lastConnected={formattedDate}
        />
        <LocationCard location={device.location} />
        <CellInfoCard
          operator={device.hw_data.sim.operator}
          signalStrength={device.hw_data.sim.signalStrength}
        />
        <USBDevicesCard devices={["Device 1", "Device 2"]} />
        <BatteryInfoCard
          charge={device.hw_data.battery.percentage}
          temperature={device.hw_data.battery.temperature}
        />
      </div>
      <div>
        <LineChart/>
      </div>
      <div className="flex gap-3  md:px-10 px-3 pt-20 md:flex-nowrap flex-wrap  ">
      
      <BarChart value="flex-row"/>
      </div>
      <div className="md:px-10 px-3">
        <UptimeChart/>
      </div>
    </div>
  );
};

export default DeviceDetails;
