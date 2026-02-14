import React from "react";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner")
  return (
    <>
      {!isOwnerPath &&<Navbar />}

      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default App;
