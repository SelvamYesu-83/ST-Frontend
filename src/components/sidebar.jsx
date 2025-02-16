import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/sidebar.css"; // Import CSS file

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <aside className="sidebar">
      <nav className="nav-menu">
        {/* Tickets */}
        <button
          className="nav-item"
          onClick={() => handleNavigate("/Dashboard")}
        >
          <img src="/Dashboard-icon.png" alt="Tickets Icon" className="icon" />
          <span>Over View</span>
        </button>

        {/* TicketMain */}
        <button className="nav-item" onClick={() => handleNavigate("/ticket")}>
          <img src="/Ticket-icon.png" alt="Tickets Icon" className="icon" />
          <span>Tickets</span>
        </button>

        {/* Reports */}
        <button
          className="nav-item"
          onClick={() => handleNavigate("/ReportsPage")}
        >
          <img src="/Report-icon.png" alt="Reports Icon" className="icon" />
          <span>Reports</span>
        </button>
      </nav>
      <img
        src="/Background-img.png"
        alt="Background-img"
        className="background-img"
      />
    </aside>
  );
};

export default Sidebar;
