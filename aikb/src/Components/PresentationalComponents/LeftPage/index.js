import React from "react";
import DeviceListWarper from "../DeviceListWarper";
import AddDeviceButton from "../AddDeviceButton";
import "./index.css";

const LeftPage = () => {
  return (
    <div className="left-page">
      <DeviceListWarper />
      <AddDeviceButton />
    </div>
  );
};

export default LeftPage;
