import React from "react";
import InputField from "../InputField";
import Device from "../Device";
import "./index.css";

const DeviceList = ({ devices }) => {
  return (
    <div className="left-side">
      <InputField />
      <Device devices={devices} />
    </div>
  );
};

export default DeviceList;
