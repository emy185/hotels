import React from "react";
import TravelArticals from "../../Features/TravelArticals/TravelArticals";
import AppBooking from "../../Features/AppBooking/AppBooking";
import FeaturedTrips from "../../Features/FeaturedTrips/FeaturedTrips";
function Home() {
  return (
    <>
      <FeaturedTrips />
      <TravelArticals />
      <AppBooking />
    </>
  );
}

export default Home;
