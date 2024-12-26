import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import style from "./BookingPage.module.css";
import { useLocation } from "react-router-dom";

const BookingPage = () => {
  const location = useLocation();
  const bookingDetails = location.state || {};
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address1: "",
    address2: "",
    state: "",
    zip: "",
    tourContent: "",
    promoCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    alert("Order submitted successfully!");
    console.log(formData);
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Form Section */}
        <div className={`col-md-8`}>
          <Row className={` ${style.leftNote}`}>
            <p>
              <span>Sign in </span>to book with your saved details or{" "}
              <span>register </span>to mange your booking on the go!
            </p>
          </Row>
          <Row className={` ${style.leftForm}`}>
            <h2 className="mb-4">Let us know who you are</h2>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <Row>
                <div className="mb-3 col-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3 col-6">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </Row>
              <Row>
                <div className="mb-3 col-6">
                  <input
                    type="text"
                    name="country"
                    className="form-control"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3 col-6">
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
              </Row>
              <div className="mb-3">
                <input
                  type="text"
                  name="address1"
                  className="form-control"
                  placeholder="Address 1"
                  value={formData.address1}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="address2"
                  className="form-control"
                  placeholder="Address 2"
                  value={formData.address2}
                  onChange={handleInputChange}
                />
              </div>
              <Row>
                <div className="mb-3 col-6">
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    placeholder="State/Province/Region"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3 col-6">
                  <input
                    type="text"
                    name="zip"
                    className="form-control"
                    placeholder="ZIP code/Postal code"
                    value={formData.zip}
                    onChange={handleInputChange}
                  />
                </div>
              </Row>
              <div className="mb-3">
                <textarea
                  name="tourContent"
                  className="form-control"
                  placeholder="Tour Content"
                  rows="5"
                  value={formData.tourContent}
                  onChange={handleInputChange}
                />
              </div>
              <p>
                By proceeding with this booking i agree to tourz Terms of Use
                and Privacy Policy.
              </p>

              <button
                type="button"
                className={` ${style.btnSubmit} btn btn-primary`}
                onClick={handleSubmit}
              >
                Next <i className="fa-solid fa-arrow-up-long"></i>
              </button>
            </form>
          </Row>
        </div>

        {/* Booking Details Section */}
        <div className={`col-md-4 ${style.righItem}`}>
          <Row className={style.rightInfo}>
            <h2 className="mb-4">Your booking details</h2>
            <ul className="list-group mb-3">
              <Row className="d-flex align-content-center">
                <Col lg={4} className={style.tripImg}>
                  <img
                    src={bookingDetails.img}
                    alt="Zipline 18 Platform"
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col lg={8} className={style.tripName}>
                  <p>{bookingDetails.title}</p>
                </Col>
              </Row>
              <hr />
              <Row>
                <p>
                  <strong>Date:</strong>
                  <span className={`${style.data} float-end`}>
                    {bookingDetails.date}
                  </span>
                </p>
                <p>
                  <strong>Time:</strong>
                  <span className={`${style.data} float-end`}>
                    {" "}
                    {bookingDetails.time}
                  </span>
                </p>
                <p>
                  <strong>Duration:</strong>
                  <span className={`${style.data} float-end`}> 12 Days</span>
                </p>
                <p>
                  <strong>Tickets:</strong>
                  <span className={`${style.data} float-end`}>
                    {" "}
                    Adult x{bookingDetails.adultCount} = $
                    {282.0 * bookingDetails.adultCount}
                    <br /> Youth x{bookingDetails.youthCount} = $
                    {168.0 * bookingDetails.youthCount}
                    <br /> Children x{bookingDetails.childCount} = $
                    {80.0 * bookingDetails.childCount}
                  </span>
                </p>
              </Row>
              <hr />
              <Row>
                <p>
                  <strong>Service per booking</strong>
                  <span className={`${style.data} float-end`}>
                    {" "}
                    ${bookingDetails.servicePerBooking}
                  </span>
                </p>
                <p>
                  <strong>
                    Service per person {bookingDetails.adultCount} Adult,
                    {bookingDetails.youthCount}
                  </strong>
                  <span className={`${style.data} float-end`}>
                    {" "}
                    ${bookingDetails.servicePerPerson}
                  </span>
                </p>
                <p>
                  <strong>Youth,{bookingDetails.childCount} Children</strong>
                </p>
              </Row>
              <hr />
              <Row>
                <p>
                  <strong>Subtotal</strong>
                  <span className={`${style.data} float-end`}>
                    $
                    {bookingDetails.adultCount * 282 +
                      bookingDetails.youthCount * 168 +
                      bookingDetails.childCount * 80}
                  </span>
                </p>
                <p>
                  <strong>Total</strong>
                  <span className={`${style.data} float-end`}>
                    {" "}
                    ${bookingDetails.total}
                  </span>
                </p>
                <p>
                  <strong>Amount Paid</strong>
                  <span className={`${style.data} float-end`}> $40.00</span>
                </p>
                <p>
                  <strong>Amount Due</strong>
                  <span className={`${style.data} float-end`}>
                    {" "}
                    ${bookingDetails.total - 40.0}{" "}
                  </span>
                </p>
              </Row>
            </ul>
          </Row>
          <Row className={style.rightCode}>
            <h3>Do you have promo code?</h3>
            <div className="mb-3">
              <input
                type="text"
                name="promoCode"
                className="form-control"
                placeholder="Promo code"
                value={formData.promoCode}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="button"
              className={`${style.appltBtn} btn btn-secondary me-2`}
              onClick={() => alert("Promo code applied!")}
            >
              Apply <i className="fa-solid fa-arrow-up-long"></i>
            </button>
          </Row>
          <br />
          <Row>
            <button
              type="button"
              className={` ${style.orderBtn} btn `}
              onClick={handleSubmit}
            >
              Complete My Order <i className="fa-solid fa-arrow-up-long"></i>
            </button>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
