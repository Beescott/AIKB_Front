import React, { useEffect, useState } from "react";
import "./App.css";
import DeviceList from "./Components/PresentationalComponents/DeviceList";
import System from "./Components/PresentationalComponents/System";
import { Smartphones } from "./Components/SmartphoneList"

function App() {
  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    fetch("/get_smartphones").then(response =>
      response.json().then(data => {
        setSmartphones(data.smartphones);
      })
    );
  }, []);

  return (
    <div className="App">
      <div style={{float: 'left'}}>
        <Smartphones smartphones={smartphones}/>
      </div>
      <div>
        This is a test
      </div>
      <div className="warper">
        <DeviceList />
        <System />
      </div>
    </div>
  );
}

export default App;
