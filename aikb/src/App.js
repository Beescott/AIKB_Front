import React, { useEffect, useState } from "react";
import "./App.css";
import DeviceList from "./Components/PresentationalComponents/DeviceList";
import System from "./Components/PresentationalComponents/System";

function App() {
  // const [devices, setDevices] = useState([]);

  // useEffect(() => {
  //   fetch("/devices").then(response =>
  //     response.json().then(data => {
  //       setDevices(data.devices);
  //     })
  //   );
  // });

  var devices = ["Test"];

  return (
    <div className="App">
      <div className="warper">
        <DeviceList />
        <System />
      </div>
    </div>
  );
}

export default App;
