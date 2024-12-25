import React from "react";
import { Routes, Route } from "react-router-dom";
import Tour from "../pages/Tour/Tour";
import HotelDetail from "../pages/Details/HotelDetails";
import TripsDetailsPage from "../pages/TripsDetailsPage/TripsDetailsPage";
import Contact from "../pages/Contact/Contact";
import BookingPage from "../pages/BookingPage/BookingPage";
import Home from "../pages/Home/Home";
import Guides from "../pages/Guides/Guides";
function RoutesConfig() {
  return (
    <Routes>
      <Route path="/Guides" element={<Guides />} />
      <Route path="/" element={<Home />} />
      <Route path="/Tour" element={<Tour />} />
      <Route path="/HotelDetails" element={<HotelDetail />} />
      <Route path="/TripsDetailsPage/:id" element={<TripsDetailsPage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/BookingPage" element={<BookingPage />} />
    </Routes>
  );
}

export default RoutesConfig;