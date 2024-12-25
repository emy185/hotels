import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LuClock3 } from "react-icons/lu";
import { PiUsersThree, PiCalendarCheck } from "react-icons/pi";
import { LiaBirthdayCakeSolid, LiaLanguageSolid } from "react-icons/lia";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import data from "../../assets/data/Data.json";
import "./style.css";

function Details() {
  const [adultCount, setAdultCount] = useState(3);
  const [youthCount, setYouthCount] = useState(2);
  const [childCount, setChildCount] = useState(4);
  const [addServicePerBooking, setAddServicePerBooking] = useState(false);
  const [addServicePerPerson, setAddServicePerPerson] = useState(false);
  const [selectedDate, setSelectedDate] = useState("December 05 ~ January");
  const [selectedTime, setSelectedTime] = useState("9:00 AM");

  const adultPrice = 282.0;
  const youthPrice = 168.0;
  const childPrice = 80.0;
  const servicePerBooking = 40;
  const servicePerPerson = (adultCount + youthCount + childCount) * 40;

  const navigate = useNavigate();
  const phuketData = data.hotelsPhupket || [];
  const location = useLocation();
  const { id } = location.state;

  const item = phuketData.find((item) => item.id === id);

  const total =
    adultCount * adultPrice +
    youthCount * youthPrice +
    childCount * childPrice +
    (addServicePerBooking ? servicePerBooking : 0) +
    (addServicePerPerson ? servicePerPerson : 0);

  const handleIncrement = (type) => {
    if (type === "adult") setAdultCount(adultCount + 1);
    if (type === "youth") setYouthCount(youthCount + 1);
    if (type === "child") setChildCount(childCount + 1);
  };

  const handleDecrement = (type) => {
    if (type === "adult" && adultCount > 0) setAdultCount(adultCount - 1);
    if (type === "youth" && youthCount > 0) setYouthCount(youthCount - 1);
    if (type === "child" && childCount > 0) setChildCount(childCount - 1);
  };

  const handleCheckboxChange = (type) => {
    if (type === "booking") setAddServicePerBooking(!addServicePerBooking);
    if (type === "person") setAddServicePerPerson(!addServicePerPerson);
  };

  const handleBookNow = () => {
    const bookingDetails = {
      title: item.name,
      img: item.image,
      adultCount,
      youthCount,
      childCount,
      servicePerBooking: addServicePerBooking ? servicePerBooking : 0,
      servicePerPerson: addServicePerPerson
        ? (adultCount + youthCount + childCount) * servicePerBooking
        : 0,
      total,
      date: selectedDate,
      time: selectedTime,
    };
    navigate("/bookingPage", { state: bookingDetails });
  };

  return (
    <div className="py-5">
      <div className="details">
        <div className="details-description">
          <div className="trip-info pb-5">
            <div className="info">
              <LuClock3 className="border border-secondary p-2 fs-1 rounded" />
              <div>
                <span>Duration</span>
                <br />
                <span className="text-secondary">3 Days</span>
              </div>
            </div>
            <div className="info">
              <PiUsersThree className="border border-secondary p-2 fs-1 rounded" />
              <div>
                <span>Group Size</span>
                <br />
                <span className="text-secondary">10 People</span>
              </div>
            </div>
            <div className="info">
              <LiaBirthdayCakeSolid className="border border-secondary p-2 fs-1 rounded" />
              <div>
                <span>Ages</span>
                <br />
                <span className="text-secondary">18-99 yrs</span>
              </div>
            </div>
            <div className="info">
              <LiaLanguageSolid className="border border-secondary p-2 fs-1 rounded" />
              <div>
                <span>Languages</span>
                <br />
                <span className="text-secondary">English, Japanese</span>
              </div>
            </div>
          </div>

          <div>
            <h1 className="pb-3">Tour Overview</h1>
            <p className="pb-2">{item.description}</p>
            <h4 className="pb-3">Tour Highlights</h4>
            <ul className="pb-4 overview">
              <li className="pb-2">
                Experience the thrill of a speedboat to the stunning Phi Phi
                Islands
              </li>
              <li className="pb-2">Be amazed by the variety of marine life</li>
              <li className="pb-2">
                Enjoy relaxing in paradise with white sand beaches
              </li>
              <li className="pb-2">
                Feel the comfort of a tour limited to 35 passengers
              </li>
              <li className="pb-2">Catch a glimpse of the wild animals</li>
            </ul>
          </div>

          <div className="amenities pb-4">
            <h1 className="pb-2 pt-4">What's included</h1>
            <div className="amenities-items">
              <div className="amenities-section">
                {Array.isArray(item.amenities) && item.amenities.length > 0 ? (
                  <ul className="amenities-list">
                    {item.amenities.map((amenity, index) => (
                      <li key={index} className="amenity-item pb-3">
                      <IoMdCheckmark className="text-success sucess fs-2" /> {amenity}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No amenities available</p>
                )}
              </div>
              <div>
                <ul>
                  <li className="pb-3">
                    <IoMdClose className="text-danger danger fs-2" />
                    Towel
                  </li>
                  <li className="pb-3">
                    <IoMdClose className="text-danger danger fs-2" />
                    Tips
                  </li>
                  <li className="pb-3">
                    <IoMdClose className="text-danger danger fs-2" />
                    Alcoholic Beverages
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-card bg-white">
          <h5 className="py-2">
            From <span className="fw-bold">${item.price_per_night}</span>
          </h5>

          <div className="date-time mb-3">
            <div className="dropdown date-selection">
              <PiCalendarCheck className="p-2 bg-light fs-1 rounded" />
              <div>
                <label>From</label>
                <br />
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                >
                  <option>December 05 ~ January</option>
                  <option>December 15 ~ December 22</option>
                  <option>December 22 ~ January 01</option>
                </select>
              </div>
            </div>

            <div className="dropdown">
              <LuClock3 className="p-2 bg-light fs-1 rounded" />
              <div>
                <label>Time</label>
                <br />
                <select
                  className="time-selection"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option>9:00 AM</option>
                  <option>12:00 PM</option>
                  <option>3:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          <h5>Tickets</h5>
          <div className="ticket-row mb-3">
            <span className="fw-normal">
              Adult (18 + years){" "}
              <span className="fw-bold">${adultPrice.toFixed(2)}</span>
            </span>
            <div className="counter">
              <button onClick={() => handleDecrement("adult")}>-</button>
              <span className="mx-3">{adultCount}</span>
              <button onClick={() => handleIncrement("adult")}>+</button>
            </div>
          </div>
          <div className="ticket-row mb-3">
            <span className="fw-normal">
              Youth (13 - 17 years){" "}
              <span className="fw-bold">${youthPrice.toFixed(2)}</span>
            </span>
            <div className="counter">
              <button onClick={() => handleDecrement("youth")}>-</button>
              <span className="mx-3">{youthCount}</span>
              <button onClick={() => handleIncrement("youth")}>+</button>
            </div>
          </div>
          <div className="ticket-row mb-3">
            <span className="fw-normal">
              Children (0 - 12 years){" "}
              <span className="fw-bold">${childPrice.toFixed(2)}</span>
            </span>
            <div className="counter">
              <button onClick={() => handleDecrement("child")}>-</button>
              <span className="mx-3">{childCount}</span>
              <button onClick={() => handleIncrement("child")}>+</button>
            </div>
          </div>

          <h5 className="pb-2">Add Extra</h5>
          <div className="extra mb-2">
            <div>
              <input
                type="checkbox"
                id="service"
                checked={addServicePerBooking}
                onChange={() => handleCheckboxChange("booking")}
              />
              <label htmlFor="service" className="mx-2">
                Add Service per booking
              </label>
            </div>
            <span className="fw-normal">$ {servicePerBooking}</span>
          </div>
          <div className="extra">
            <div>
              <input
                type="checkbox"
                id="service"
                checked={addServicePerPerson}
                onChange={() => handleCheckboxChange("person")}
              />
              <label htmlFor="service" className="mx-2">
                Add Service per person
              </label>
            </div>
            <span className="fw-normal">$ {servicePerBooking}</span>
          </div>
          <span className="fw-normal mx-4">Adult: $17.00 - Youth: $14.00</span>

          <h5 className="total pt-4 my-4">
            Total: <span className="fw-normal">${total.toFixed(2)}</span>
          </h5>

          <button className="book-now mb-3 w-100" onClick={handleBookNow}>
            Book Now <GoArrowUpRight className="fs-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Details;
