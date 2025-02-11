import React from "react";
import ViewTicketLeft from "./view-ticket-left.jsx";
import ViewTicketRight from "./view-ticket-right.jsx";
import "../../style/tickets/view-ticket.css";

const ViewTicketDetails = () => {
  return (
    <div className="view-details">
      <div className="ticket-container">
        <div className="view-left">
          <ViewTicketLeft />
        </div>
        <div className="view-right">
          <ViewTicketRight />
        </div>
      </div>
    </div>
  );
};

export default ViewTicketDetails;
