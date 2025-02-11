import React from "react";
import "../../style/header/headerright.css"; // Import the CSS file

const HeaderRight = () => {
  return (
    <nav className="header">
      {/* Right Side: Icons */}
      <div className="icons">
        <button className="icon-btn">
          <img src="../share.png" alt="Share" className="img" />
        </button>
        <button className="icon-btn">
          <img src="../question-circle.png" alt="question" className="img" />
        </button>
        <button className="icon-btn">
          <img src="../settings.png" alt="settings" className="img" />
        </button>
        <button className="profile-btn">S</button>
      </div>
    </nav>
  );
};

export default HeaderRight;
