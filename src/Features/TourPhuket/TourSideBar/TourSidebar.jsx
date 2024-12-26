import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientChooseSide from "./ClientChooseSide/clientChooseSide";
import FilterPrice from "./FilterPrice/FilterPrice";
import Duration from "./Duration/Duration";
// import Language from "./Language/language";
import Rating from "./Rating/Rating";
import Specials from "./Specials/Specials";

function TourSidebar() {
  return (
    <>
      <div className="travellingTimeCard d-flex flex-column justify-content-center align-items-center">
        <div className="containerCard">
          <p className="text-light fw-semibold">When are you Travelling?</p>
          <div className="ChoosingDateInput d-flex flex-column justify-content-center align-items-center">
            <input type="date" />
          </div>
        </div>
      </div>
      <aside className="clientChooseSide p-4">
        <div className="mb-10">
          <div className="mb-5">
            <ClientChooseSide />
          </div>
          <div className="mb-5">
            <FilterPrice />
          </div>
          <div className="mb-5">
            <Duration />
          </div>
          <div className="mb-5">
            <Rating />
          </div>
          <div className="mb-5">
            <Specials />
          </div>
        </div>
      </aside>
    </>
  );
}
export default TourSidebar;
