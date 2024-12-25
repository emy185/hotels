import React from "react";
import TravelArticals from "../../Features/TravelArticals/TravelArticals";
import AppBooking from "../../Features/AppBooking/AppBooking";
import FeaturedTrips from "../../Features/FeaturedTrips/FeaturedTrips";
import TrendingDistination from "../../Features/TrendingDistination/TrendingDistination";
function Home() {
  return (
    <>
      <FeaturedTrips />
      <TrendingDistination />
      <TravelArticals />
      <AppBooking />
    </>
  );
}

export default Home;
