import React from "react";
// import { List, Header } from "semantic-ui-react";
import "./index.css";

const Device = ({ device, delEvent }) => {
  return (
    <li key={device.name} onClick={delEvent}>
      <a>{device.name}</a>
      <a> | </a>
      <a>{device.connectivity} </a>
    </li>
  )
}

export default Device;
