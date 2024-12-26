import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import bg from "../../assets/images/bg.png";
import { PiCalendarCheck } from "react-icons/pi";
import { LuFlag } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineSearch } from "react-icons/md";
import "./style.css";

const SearchBar = () => {
  return (
    <div className="header">
      <img src={bg} alt="bg-img" className="w-100" />
      <div className="search-bar">
        <h1 className="text-center search-bar-title">Life Is Adventure Make</h1>
        <h1 className="text-center pb-3 search-bar-title">The Best Of It</h1>
        <div className="search-content rounded-5 px-4">
          <div className="dropdown date-selection border-0 pb-0 pt-2">
            <SlLocationPin className="p-2 icon fs-1 rounded-5" />
            <div>
              <label>Where</label>
              <br />
              <select>
                <option>Select Destination</option>
                <option>Phuket</option>
                <option>Roma</option>
                <option>Luxor</option>
              </select>
            </div>
          </div>

          <div className="dropdown date-selection border-0 pb-0 pt-2">
            <PiCalendarCheck className="p-2 fs-1 icon rounded-5" />
            <div>
              <label>From</label>
              <br />
              <select>
                <option>December 05 ~ January</option>
                <option>December 15 ~ December 22</option>
                <option>December 22 ~ January 01</option>
              </select>
            </div>
          </div>

          <div className="dropdown date-selection border-0 pb-0 pt-2">
            <LuFlag className="p-2 fs-1 icon rounded-5" />
            <div>
              <label>Tour Type</label>
              <br />
              <select>
                <option>All Tour</option>
                <option>Cruise</option>
                <option>Beach Tours</option>
                <option>Hiking</option>
              </select>
            </div>
          </div>
          <button className="search-button">
            <MdOutlineSearch className="fs-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
