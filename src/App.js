import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from ".././src/pages/page/login";
import Ticket from '../src/pages/page/my-ticket';
import CreateTicket from '../src/pages/page/create-ticket';
import ViewTicket from '../src/pages/page/view-ticket-page';
import CloseTicket from '../src/pages/page/close-ticket-page'


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/ticket/createticket" element={<CreateTicket />} />
        <Route path="/ticket/createticket/viewTicket" element={<ViewTicket />} />
        <Route path="/ticket/createticket/CloseTicket" element={<CloseTicket />} />
      </Routes>
    </Router>
  );
}

export default App;
