import React from "react";
import "../../style/tickets/view-ticket-left.css";

const ViewTicketLeft = () => {
  return (
    <div className="Header">
      <div className="Middle-Left">
        <div className="ticketno">
          <p>Ticket Number</p>
          <p className="ticketno-colon"> :</p>
        </div>
        <div className="projectmodule">
          <p>Project Module</p>
          <p className="projectmodule-colon"> :</p>
        </div>
        <div className="module">
          <p>Module</p>
          <p className="module-colon"> :</p>
        </div>
        <div className="subject">
          <p>Subject</p>
          <p className="subject-colon"> :</p>
        </div>
        <div className="rasied">
          <p>Rasied this request on behalf of</p>
          <p className="rasied-colon"> :</p>
        </div>
        <div className="problem">
          <p>Problem Description</p>
          <p className="problem-colon"> :</p>
        </div>
        <div className="agent">
          <p>Agent Description</p>
          <p className="agent-colon"> :</p>
        </div>
        <div className="duedate">
          <p>Due Date</p>
          <p className="duedate-colon"> :</p>
        </div>

        <div className="bottom">
          <div className="attachment">
            <p>Attachment</p>
            <p className="attachment-colon"> :</p>
            <a href="your-download-link" className="download">
              {" "}
              <strong>Download</strong>
            </a>
          </div>

          <div className="acknowledged-container">
            <div className="acknowledged">
              <button type="button">
                <strong>Acknowledged</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTicketLeft;
