import React, { useEffect, useState } from "react";
import "./App.css";
import Device from "./Components/PresentationalComponents/Device";
import System from "./Components/PresentationalComponents/System";
import InputField from "./Components/PresentationalComponents/InputField";

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
        <InputField />
        <Device devices={devices} />
        <System />
      </div>
    </div>
  );
}

export default App;
