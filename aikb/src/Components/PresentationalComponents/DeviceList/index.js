import React, { useEffect, useState } from "react";
import Smartphones from "../SmartphoneList";
import "./index.css";

const DeviceList = ({ devices, delEvent }) => {
  return (
    <div className="left-side">
      <h2>DeviceList</h2>
      <ul>
        {devices.map((device, index) => {
          return <Device 
                    device={device}
                    delEvent={delEvent.bind(this, index)}
                  />
        })}
      </ul>
    </div>
  );
};

export default DeviceList;
