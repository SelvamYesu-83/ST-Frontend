import React from "react";
import "../../style/header/headerleft.css";

const HeaderLeft = () => {
  return (
    <nav className="header">
      <div className="header-container">
        {/* Left Side: Logo */}
        <a className="logo" href="#">
          <img
            src="../Smart-Tracker-Logo.png"
            alt="Logo"
            className="logo-img"
          />
        </a>
      </div>
    </nav>
  );
};

export default HeaderLeft;
