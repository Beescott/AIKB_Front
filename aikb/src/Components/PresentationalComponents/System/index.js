import React from "react";
import "./index.css";
import Device from "../Device";

const System = ({ devices, delEvent }) => {
  return (
    <div className="system">
      <h2>System</h2>
      <ul>
        {devices.map((device, index) => {
          return (
            <Device device={device} delEvent={delEvent.bind(this, index)} />
          );
        })}
      </ul>
    </div>
  );
};

export default System;
