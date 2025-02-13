import React from "react";
import "../../style/tickets/view-ticket-right.css";

const ViewTicketRight = () => {
  return (
    <div className="Middle-Right">
      <div className="category">
        <p>Category</p>
        <p className="category-colon"> :</p>
      </div>
      <div className="priority">
        <p>Priority</p>
        <p className="priority-colon"> :</p>
      </div>
      <div className="source">
        <p>Source</p>
        <p className="source-colon"> :</p>
      </div>
    </div>
  );
};

export default ViewTicketRight;
