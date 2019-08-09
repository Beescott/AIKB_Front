import React from "react";
import "./index.css";

const Smartphones = ({ smartphones }) => {
  return (
    <div id="SmartphoneList">
      <ul>
        {smartphones.map(item => (
          <li key={item}>
            <a>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Smartphones;
