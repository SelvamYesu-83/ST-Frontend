import React from "react";
import "../../style/tickets/close-ticket-left.css";

const CloseTicketLeft = () => {
  return (
    <div className="CloseTicket-Header">
      <div className="CloseTicket-Left">
        <div className="close-ticketno">
          <p>Ticket Number</p>
          <p className="close-ticketno-colon"> :</p>
        </div>
        <div className="close-projectmodule">
          <p>Project Module</p>
          <p className="close-projectmodule-colon"> :</p>
        </div>
        <div className="close-module">
          <p>Module</p>
          <p className="close-module-colon"> :</p>
        </div>
        <div className="close-subject">
          <p>Subject</p>
          <p className="close-subject-colon"> :</p>
        </div>
        <div className="close-rasied">
          <p>Rasied this request on behalf of</p>
          <p className="close-rasied-colon"> :</p>
        </div>
        <div className="close-problem">
          <p>Problem Description</p>
          <p className="close-problem-colon"> :</p>
        </div>
        <div className="close-duedate">
          <p>Due Date</p>
          <p className="close-duedate-colon"> :</p>
        </div>
        <div className="close-solution">
          <p>Solution</p>
          <p className="close-solution-colon"> :</p>
          <input
            className="description"
            type="text"
            placeholder="Enter Description"
          />
          <div className="Close-container">
            <div className="Close">
              <button type="button">
                <strong>Close</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloseTicketLeft;
