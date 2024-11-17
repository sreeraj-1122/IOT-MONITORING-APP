import React from "react";
import SubLists from './SubLists';
import deviceData from "../../assets/sample-datasets/deviceData.json";

const DeviceList = () => {
  const offlineDevices = deviceData
    .filter((device) => device.connectionStatus.disconnected)
    .sort(
      (a, b) =>
        new Date(b.connectionStatus.disconnected) -
        new Date(a.connectionStatus.disconnected)
    );
  return (
    <div className="h-[400px] overflow-x-auto border border-customDark rounded-lg px-4 py-2">
      <h5 className="text-[#171717] text-sm font-medium mb-4">Offline Devices</h5>
          {offlineDevices.map((device, index) => (
            <>
              <SubLists key={device.deviceName} device={device.deviceName} location={device.location.city} disconnected={device.connectionStatus.disconnected}/>
            </>
            
          ))}
      
    </div>
  );
};

export default DeviceList;
