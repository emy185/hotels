import React from "react";
import TravelArticals from "../../Features/TravelArticals/TravelArticals";
import AppBooking from "../../Features/AppBooking/AppBooking";
import FeaturedTrips from "../../Features/FeaturedTrips/FeaturedTrips";
import TrendingDistination from "../../Features/TrendingDistination/TrendingDistination";
import CustomerReviews from "../../Features/CustomerReviews/customerReviews";

function Home() {
  return (
    <>
      <FeaturedTrips />
      <TrendingDistination />
      <CustomerReviews />
      <TravelArticals />
      <AppBooking />
     
    </>
  );
}

export default Home;
