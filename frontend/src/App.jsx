import React from "react";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HotelCard from "./components/HotelCard";
import AllRoom from "./pages/AllRoom";
import Footer from "./components/Footer";
import RoomDetail from "./pages/RoomDetail";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Login from "./components/Login";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <>
      {!isOwnerPath && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/room" element={<AllRoom />} />
        <Route path="/room/:id" element={<RoomDetail />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      {!isOwnerPath && <Footer />}
    </>
  );
};

export default App;
