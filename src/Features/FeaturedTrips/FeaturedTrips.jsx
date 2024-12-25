import React from "react";
import { Link } from "react-router-dom";
import data from "../../assets/data/Data.json";
import { SlLocationPin } from "react-icons/sl";
import { FaStar } from "react-icons/fa6";
import { LuClock3 } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import "./style.css";

function FeaturedTrips() {
  const featuredTrips = data.featuredTrips;
  return (
    <div className="featured-trips">
      <div className="container py-5">
        <div className="d-flex align-items-baseline justify-content-between">
          <h3 className="fw-bold pb-4">Featured Trips</h3>
          <Link to="#" className="see-all">
            See all <GoArrowUpRight />
          </Link>
        </div>
        <div className="cards">
          {featuredTrips.map((trip) => {
            const imagePath = require(`../../assets/images/${trip.image}`);
            return (
              <div className="mb-4 card" key={trip.id}>
                <div className="card-img">
                  <img
                    src={imagePath}
                    className="card-img-top"
                    alt={trip.title}
                  />
                  <button>
                    <CiHeart />
                  </button>
                </div>
                <div className="card-body p-3">
                  <span className="text-secondary">
                    <SlLocationPin /> {trip.destination}
                  </span>
                  <h5 className="card-title mt-2">{trip.title}</h5>
                  <div className="card-rating pb-2">
                    <div>
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                    </div>
                    <span>
                      {trip.rating} ({trip.reviews})
                    </span>
                  </div>
                  <div className="card-price pt-2">
                    <span>
                      <LuClock3 /> {trip.duration}
                    </span>
                    <span>
                      From <span className="fw-bold">${trip.price}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default FeaturedTrips;
