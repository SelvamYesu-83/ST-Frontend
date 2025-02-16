import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from ".././src/pages/page/login";
import Ticket from '../src/pages/page/my-ticket';
import CreateTicket from '../src/pages/page/create-ticket';
import ViewTicket from '../src/pages/page/view-ticket-page';
import CloseTicket from '../src/pages/page/close-ticket-page'
import { ToastContainer, toast } from "react-toastify";

function App() {
  const showToast = () => {
    toast.success("Success! 🎉", {
      position: "top-right",
      autoClose: 3000, // Closes after 3 sec
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/ticket/createticket" element={<CreateTicket />} />
        <Route path="/ticket/createticket/viewTicket" element={<ViewTicket />} />
        <Route path="/ticket/createticket/CloseTicket" element={<CloseTicket />} />
      </Routes>
    </Router>
  );
}

export default App;
