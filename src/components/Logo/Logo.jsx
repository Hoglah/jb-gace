import React from "react";
import logo from "../../assets/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="flex__center logo__container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h2 className="text__gradient">
        J.B & <span>Grace</span>
      </h2>
    </div>
  );
};

export default Logo;
