import React from "react";
import "../../style/tickets/close-ticket-right.css";

const CloseTicketRight = () => {
  return (
    <div className="Close-Middle-Right">
      <div className="close-category">
        <p>Category</p>
        <p className="close-category-colon"> :</p>
      </div>
      <div className="close-priority">
        <p>Priority</p>
        <p className="close-priority-colon"> :</p>
      </div>
      <div className="close-source">
        <p>Source</p>
        <p className="close-source-colon"> :</p>
      </div>
    </div>
  );
};

export default CloseTicketRight;
