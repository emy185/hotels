import React from "react";
import data from "../../assets/data/Data.json";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import "./style.css";

const PopularActivities = () => {
  const activities = data.popularThingsToDo;
  const imagePath1 = require(`../../assets/images/${activities[0].image}`);
  const imagePath2 = require(`../../assets/images/${activities[1].image}`);
  const imagePath3 = require(`../../assets/images/${activities[2].image}`);
  const imagePath4 = require(`../../assets/images/${activities[3].image}`);
  const imagePath5 = require(`../../assets/images/${activities[4].image}`);
  const imagePath6 = require(`../../assets/images/${activities[5].image}`);

  return (
    <div className="bg-light py-5">
      <div className="popular-activities container py-5">
        <div className="d-flex align-items-start justify-content-between">
          <h3 className="fw-bold pb-4">Popular Things to Do</h3>
          <Link to="#" className="see-all">
            See all <GoArrowUpRight />
          </Link>
        </div>

        <div className="activities">
          <div className="d-flex flex-wrap">
            <div className="activities-item1 mx-3">
              <img src={imagePath1} alt="img1" className="img1" />
              <span className="text-white">{activities[0].title}</span>
            </div>
            <div>
              <div className="d-flex flex-wrap">
                <div className="activities-item2">
                  <img src={imagePath2} alt="img2" className="img2" />
                  <span className="text-white">{activities[1].title}</span>
                </div>
                <div className="activities-item3">
                  <img src={imagePath3} alt="img3" className="img3" />
                  <span className="text-white">{activities[2].title}</span>
                </div>
              </div>
              <div className="d-flex flex-wrap">
                <div className="activities-item4">
                  <img src={imagePath4} alt="img4" className="img4" />
                  <span className="text-white">{activities[3].title}</span>
                </div>
                <div className="activities-item5">
                  <img src={imagePath5} alt="img5" className="img5" />
                  <span className="text-white">{activities[4].title}</span>
                </div>
                <div className="activities-item6">
                  <img src={imagePath6} alt="img6" className="img6" />
                  <span className="text-white">{activities[5].title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularActivities;
