import React from "react";
import data from "../../assets/data/Data.json";
import { SlLocationPin } from "react-icons/sl";
import { FaStar } from "react-icons/fa6";
import { LuClock3 } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

function Suggestions() {
  const suggestions = data.featuredTrips.slice(0, 4);

  return (
    <div className="py-5 suggestions">
      <h1 className="pb-3">You might also like...</h1>
      <div className="cards">
        {suggestions.map((trip) => {
          const imagePath = require(`../../assets/images/${trip.image}`);
          return (
            <div className="mb-4 card p-3" key={trip.id}>
              <div className="card-img">
                <img
                  src={imagePath}
                  className="card-img-top pb-3"
                  alt={trip.title}
                />
                <button>
                  <CiHeart />
                </button>
              </div>
              <div className="card-body p-0">
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
  );
}
export default Suggestions;
