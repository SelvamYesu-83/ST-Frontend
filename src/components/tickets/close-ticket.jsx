import React from "react";
import CloseTicketLeft from "../../components/tickets/close-ticket-left.jsx";
import CloseTicketRight from "../../components/tickets/close-ticket-right.jsx";
import "../../style/tickets/close-ticket.css";

const CloseTicketDetail = () => {
  return (
    <div className="closeticket-details">
      <div className="close-left">
        <CloseTicketLeft />
      </div>
      <div className="close-right">
        <CloseTicketRight />
      </div>
    </div>
  );
};

export default CloseTicketDetail;
