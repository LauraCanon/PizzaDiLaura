import Customize from "./components/pizza/Customize";
import ClientForm from "./components/form/ClientForm";
import Home from "./components/home/Home";
import Orders from "./components/pizza/Orders";
import OrderDetail from "./components/pizza/OrderDetail";
import Navbar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/create-order" element={<ClientForm />} />
        <Route path="/historial" element={<Orders />} />
        <Route path="/historial/:id" element={<OrderDetail />} />
        {/* <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
