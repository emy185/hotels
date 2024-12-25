import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { PiNewspaper } from "react-icons/pi";
import { CiHeart, CiShare1 } from "react-icons/ci";
import "./style.css";

function HotelTitle() {
  return (
    <div className="py-3 hotel-title">
      <h1 className="fw-bold">hotel title</h1>
      <div className="hotel-title-row pb-4">
        <div className="hotel-title-row-flex">
          <div>
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
          </div>
          <span>rating</span>
          <span>
            <SlLocationPin /> location
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
      <img src="img" alt="hotel-img" />
    </div>
  );
}

export default HotelTitle;
