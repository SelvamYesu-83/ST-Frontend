import React from "react";
import "../../style/tickets/ticket-right.css";

const TicketRight = () => {
  return (
    <div className="DetailBox">
      <div className="Deatil-1">
        <div className="Detail">
          <p className="text"> Assignee</p>
          <p className="colon-1"> : </p>
          <p className="text"> Inba Raj</p>
        </div>
        <div className="Detail">
          <p className="text"> Start Date</p>
          <p className="colon-2"> : </p>
          <p className="text"> 27-02-2025</p>
        </div>
        <div className="Detail">
          <p className="text"> Time</p>
          <p className="colon-3"> : </p>
          <p className="text"> 4.09 PM</p>
        </div>
        <div className="Detail">
          <p className="text"> Close Date</p>
          <p className="colon-4"> : </p>
          <p className="text"> --</p>
        </div>
        <div className="Detail">
          <p className="text"> Reporter</p>
          <p className="colon-5"> : </p>
          <p className="text"> Selvam</p>
        </div>
      </div>
    </div>
  );
};

export default TicketRight;
