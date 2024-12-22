import React from "react";
import { Routes, Route } from "react-router-dom";
import Tour from "../pages/Tour/Tour";
import HotelDetail from "../pages/Details/HotelDetails";

function RoutesConfig() {
  return (
      <Routes>
        <Route path="/Tour" element={<Tour />} />
        <Route path="/HotelDetails" element={<HotelDetail/>}/>
      </Routes>
  );
}

export default RoutesConfig;