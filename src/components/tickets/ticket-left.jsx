import React from "react";
import TicketLeftDetails from "./ticket-left-details.jsx";
import "../../style/tickets/ticket-left.css";

const TicketLeft = () => {
  const tickets = [
    {
      ticketNo: "9023YGRYE",
      title: "ZOHO ANALYTICS",
      description:
        "Click to edit, at that time Page was jumped. This behavior disrupts the workflow and causes delays in our development process.",
      status: "Open",
    },
  ];

  return (
    <div className="TicketBox">
      <div className="Ticket-Container">
        {tickets.map((ticket, index) => (
          <TicketLeftDetails
            key={index}
            ticketNo={ticket.ticketNo}
            title={ticket.title}
            description={ticket.description}
            status={ticket.status}
          />
        ))}
      </div>
    </div>
  );
};

export default TicketLeft;
