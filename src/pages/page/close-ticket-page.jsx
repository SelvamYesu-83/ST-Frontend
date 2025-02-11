import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar";
import Heading from "../../components/heading";
import CloseTicketDetail from "../../components/tickets/close-ticket";

function CloseTicket() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="child-container">
          <Sidebar />
          <div className="container">
            <Heading />
            <CloseTicketDetail />
          </div>
        </div>
      </div>
    </>
  );
}

export default CloseTicket;
