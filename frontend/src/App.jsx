import React from "react";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HotelCard from "./components/HotelCard";
import AllRoom from "./pages/AllRoom";
import Footer from "./components/Footer";
import RoomDetail from "./pages/RoomDetail";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <>
      {!isOwnerPath && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/room" element={<AllRoom />} />
        <Route path="/room/:id" element={<RoomDetail />}></Route>
      </Routes>
      {!isOwnerPath && <Footer />}
    </>
  );
};

export default App;
