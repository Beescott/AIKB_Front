import React from "react";
import DeviceListWarperTitle from "../DeviceListWarperTitle";
import SearchInput from "../SearchInput";
import DeviceList from "../DeviceList";

const DeviceListWarper = () => {
  return (
    <div>
      <DeviceListWarperTitle />
      <SearchInput />
      <DeviceList />
    </div>
  );
};

export default DeviceListWarper;
