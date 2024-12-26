import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { PiNewspaper } from "react-icons/pi";
import { CiHeart, CiShare1 } from "react-icons/ci";
import data from "../../assets/data/Data.json";
import "./style.css";

function HotelTitle() {
  const phuketData = data.hotelsPhupket || [];
  const location = useLocation();
  const { id } = location.state;

  const item = phuketData.find((item) => item.id === id);

  return (
    <div className="py-3 hotel-title">
      <h1 className="fw-bold">{item.name}</h1>
      <div className="hotel-title-row pb-4">
        <div className="hotel-title-row-flex">
          <div>
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
          </div>
          <span>{item.rating} (283)</span>
          <span>
            <SlLocationPin /> {item.country}
          </span>
          <span>
            <PiNewspaper /> 30K+ booked
          </span>
        </div>
        <div>
          <Link to="#" className="mx-4 link">
            <CiShare1 /> Share
          </Link>
          <Link to="#" className="link">
            <CiHeart /> Wishlist
          </Link>
        </div>
      </div>
      <img src={item.image} alt="hotel-img" />
    </div>
  );
}

export default HotelTitle;
