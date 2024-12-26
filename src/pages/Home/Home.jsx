import React from "react";
import TravelArticals from "../../Features/TravelArticals/TravelArticals";
import AppBooking from "../../Features/AppBooking/AppBooking";
import FeaturedTrips from "../../Features/FeaturedTrips/FeaturedTrips";
import TrendingDistination from "../../Features/TrendingDistination/TrendingDistination";
import CustomerReviews from "../../Features/CustomerReviews/customerReviews";
import SearchBar from "../../Features/HomeHeader/searchBar";
import WhyChooseTourz from "../../Features/HomeHeader/whyChooseTourz";
import PopularActivities from "../../Features/HomeHeader/popularActivities";

function Home() {
  return (
    <>
      <SearchBar />
      <PopularActivities />
      <WhyChooseTourz />
      <FeaturedTrips />
      <TrendingDistination />
      <CustomerReviews />
      <TravelArticals />
      <AppBooking />
    </>
  );
}

export default Home;
