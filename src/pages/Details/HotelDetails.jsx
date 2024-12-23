import React from "react";
import "./style.css";
import map from "../../assets/images/map.png";
import Faq from "../../Features/hotelDetails/Faq";

function HotelDetail() {
  return (
    <div className="container mt-4">
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

    <div className="">
      <div className="filters">
        <p className="bestseller">Bestseller</p>
        <p className="free-cancel">Free cancellation</p>
      </div>
    </div>

    <div className="map pb-4 mb-4">
      <h1 className="pb-4">Tour Map</h1>
      <img src={map} alt="map" className="w-75 pb-5"/>
    </div>

    <Faq/>
    </div>
  );
}
export default HotelDetail;