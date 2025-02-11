import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar";
import Heading from "../../components/heading";
import Filter from "../../components/tickets/create-filter";
import TicketContainer from "../../components/tickets/ticket-container";
import "../../pages/style/my-ticket.css";

function Ticket() {
  return (
    <>
      <Header />
      <div className="child-container">
        <Sidebar />
        <div className="container">
          <Heading />
          <Filter />
          <TicketContainer />
        </div>
      </div>
    </>
  );
}

export default Ticket;
