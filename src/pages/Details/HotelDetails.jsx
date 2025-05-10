import React from "react";
import Faq from "../../Features/hotelDetails/Faq";
import Reviews from "../../Features/hotelDetails/Reviews";
import Suggestions from "../../Features/hotelDetails/Suggestions";
import Details from "../../Features/hotelDetails/Details";
import HotelTitle from "../../Features/hotelDetails/HotelTitle";
import "leaflet/dist/leaflet.css";
import "./style.css";

function HotelDetail() {
  return (
    <div className="bg-light">
      <div className="container pt-4">
        <div className="py-2">
          <div className="page-name">
            <div>
              <p>Home &gt; Tours &gt; Phuket</p>
            </div>
            <div>
              <p>The 10 BEST Phuket Tours & Excursions</p>
            </div>
          </div>
        </div>

        <div>
          <div className="filters">
            <p className="bestseller">Bestseller</p>
            <p className="free-cancel">Free cancellation</p>
          </div>
        </div>

        <HotelTitle />
        <Details />

        <div className="map pb-4 mb-4">
          <h1 className="pb-4">Tour Map</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5822219.590399478!2d9.975404057948008!3d44.5585468789369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2sMilan%2C%20Metropolitan%20City%20of%20Milan%2C%20Italy!5e0!3m2!1sen!2seg!4v1735146727979!5m2!1sen!2seg"
            width="75%"
            height="400"
            allowfullscreen=""
            loading="lazy"
            title="hotel-location"
            referrerpolicy="no-referrer-when-downgrade"
            className="pb-5"
          ></iframe>
        </div>

        <Faq />
        <Reviews />
        <Suggestions />
      </div>
    </div>
  );
}
export default HotelDetail;
