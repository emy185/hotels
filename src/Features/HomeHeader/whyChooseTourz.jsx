import React from "react";
import "./style.css";
import data from "../../assets/data/Data.json";

const WhyChooseTourz = () => {
  const benefits = data.whyChooseTourz;

  return (
    <div className="why-choose-tourz bg-light pb-5 benefits">
      <div className="container pb-5">
        <h3 className="fw-bold pb-4">Why choose Tourz</h3>
        <div className="d-flex align-items-center justify-content-between">
          {benefits.map((benefit) => {
            const iconPath = require(`../../assets/images/${benefit.icon}`);
            return (
              <div className="mb-4 w-75 p-4" key={benefit.id}>
                <div className="">
                  <img src={iconPath} className="pb-3" alt={benefit.title} />
                </div>
                <div className="p-0">
                  <h6 className="fw-bold">{benefit.title}</h6>
                  <span className="mt-2 fw-normal">{benefit.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseTourz;
