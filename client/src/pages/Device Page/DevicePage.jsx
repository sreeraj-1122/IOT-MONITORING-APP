import React from 'react';
import DeviceCard from '../../components/Device/DeviceCard';

const DevicePage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 justify-items-center px-16">
      <DeviceCard />
      <DeviceCard />
      <DeviceCard />
      <DeviceCard />
      <DeviceCard />
    </div>
  );
}

export default DevicePage;
