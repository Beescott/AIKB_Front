import React, { useEffect, useState } from 'react';
import './App.css';

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
    </div>
  );
}

export default App;
