import React, { useState } from "react";
import { LuClock3 } from "react-icons/lu";
import { PiUsersThree } from "react-icons/pi";
import { LiaBirthdayCakeSolid, LiaLanguageSolid } from "react-icons/lia";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { PiCalendarCheck } from "react-icons/pi";

function Details() {
  const [adultCount, setAdultCount] = useState(3);
  const [youthCount, setYouthCount] = useState(2);
  const [childCount, setChildCount] = useState(4);

  const adultPrice = 282.0;
  const youthPrice = 168.0;
  const childPrice = 80.0;
  const servicePerBooking = 40;

  const total =
    adultCount * adultPrice +
    youthCount * youthPrice +
    childCount * childPrice +
    servicePerBooking;

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
  return (
    <div className="py-5">
      <div className="details">
        <div className="w-75">
          <div className="trip-info pb-5">
            <div className="info">
              <LuClock3 className="border border-light border-2 p-2 fs-1 rounded" />
              <div>
                <span>Duration</span>
                <br />
                <span className="text-secondary">3 Days</span>
              </div>
            </div>
            <div className="info">
              <PiUsersThree className="border border-light border-2 p-2 fs-1 rounded" />
              <div>
                <span>Group Size</span>
                <br />
                <span className="text-secondary">10 People</span>
              </div>
            </div>
            <div className="info">
              <LiaBirthdayCakeSolid className="border border-light border-2 p-2 fs-1 rounded" />
              <div>
                <span>Ages</span>
                <br />
                <span className="text-secondary">18-99 yrs</span>
              </div>
            </div>
            <div className="info">
              <LiaLanguageSolid className="border border-light border-2 p-2 fs-1 rounded" />
              <div>
                <span>Languages</span>
                <br />
                <span className="text-secondary">English, Japanese</span>
              </div>
            </div>
          </div>

          <div>
            <h1 className="pb-3">Tour Overview</h1>
            <p className="pb-2">description</p>
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
              <div>
                <IoMdCheckmark className="text-success sucess fs-2" /> amenities
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

        <div className="card-container">
          <h5 className="price">
            From <span>$1,200</span>
          </h5>

          <div className="dropdown">
            <label>From</label>
            <select>
              <option>December 05 - January</option>
              <option>December 15 - December 22</option>
              <option>December 22 - January 01</option>
            </select>
          </div>

          <div className="dropdown">
            <label>Time</label>
            <select>
              <option>Choose time</option>
              <option>9:00 AM</option>
              <option>12:00 PM</option>
              <option>3:00 PM</option>
            </select>
          </div>

          <h6>Tickets</h6>
          <div className="ticket-row">
            <span>Adult (18+ years)</span>
            <div className="counter">
              <button onClick={() => handleDecrement("adult")}>-</button>
              <span>{adultCount}</span>
              <button onClick={() => handleIncrement("adult")}>+</button>
            </div>
            <span>${adultPrice.toFixed(2)}</span>
          </div>
          <div className="ticket-row">
            <span>Youth (13-17 years)</span>
            <div className="counter">
              <button onClick={() => handleDecrement("youth")}>-</button>
              <span>{youthCount}</span>
              <button onClick={() => handleIncrement("youth")}>+</button>
            </div>
            <span>${youthPrice.toFixed(2)}</span>
          </div>
          <div className="ticket-row">
            <span>Children (0-12 years)</span>
            <div className="counter">
              <button onClick={() => handleDecrement("child")}>-</button>
              <span>{childCount}</span>
              <button onClick={() => handleIncrement("child")}>+</button>
            </div>
            <span>${childPrice.toFixed(2)}</span>
          </div>

          <h6>Add Extra</h6>
          <div className="extra">
            <input type="checkbox" id="service" />
            <label htmlFor="service">
              Add Service per booking ${servicePerBooking}
            </label>
          </div>

          <h5 className="total">
            Total: <span>${total.toFixed(2)}</span>
          </h5>

          <button className="book-now">Book Now</button>
        </div>
      </div>
    </div>
  );
}
export default Details;
