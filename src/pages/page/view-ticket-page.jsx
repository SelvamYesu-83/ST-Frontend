import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar";
import Heading from "../../components/heading";
import ViewTicketDetails from "../../components/tickets/view-ticket";
import "../../pages/style/view-ticket-page.css";

function ViewTicket() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="child-container">
          <Sidebar />
          <div className="container">
            <Heading />
            <ViewTicketDetails />
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewTicket;
