import React from "react";
import logo from "./infotel-logo.jpg";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt={logo} />
    </div>
  );
};

export default Header;
