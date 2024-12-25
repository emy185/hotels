import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import style from "./BookingPage.module.css";
import Image from "../../assets/images/tour-4.png";
const BookingPage = () => {
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
                    src={Image}
                    alt="Zipline 18 Platform"
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col lg={8} className={style.tripName}>
                  <p>Zipline 18 Platform and ATV Adventure Tour From Phuket</p>
                </Col>
              </Row>
              <hr />
              <Row>
                <p>
                  <strong>Date:</strong>
                  <span className={`${style.data} float-end`}>
                    06 April 2023
                  </span>
                </p>
                <p>
                  <strong>Time:</strong>
                  <span className={`${style.data} float-end`}> 10:00 am</span>
                </p>
                <p>
                  <strong>Duration:</strong>
                  <span className={`${style.data} float-end`}> 12 Days</span>
                </p>
                <p>
                  <strong>Tickets:</strong>
                  <span className={`${style.data} float-end`}>
                    {" "}
                    Adult x2 = $98
                    <br /> Youth x3 = $383
                    <br /> Children x6 = $394
                  </span>
                </p>
              </Row>
              <hr />
              <Row>
                <p>
                  <strong>Service per booking</strong>
                  <span className={`${style.data} float-end`}> $30.00</span>
                </p>
                <p>
                  <strong>Service per person 1 Adult,2</strong>
                  <span className={`${style.data} float-end`}> $179,242</span>
                </p>
                <p>
                  <strong>Youth,4 Children</strong>
                </p>
              </Row>
              <hr />
              <Row>
                <p>
                  <strong>Subtotal</strong>
                  <span className={`${style.data} float-end`}>$382</span>
                </p>
                <p>
                  <strong>Total</strong>
                  <span className={`${style.data} float-end`}> $23</span>
                </p>
                <p>
                  <strong>Amount Paid</strong>
                  <span className={`${style.data} float-end`}> $3.482</span>
                </p>
                <p>
                  <strong>Amount Due</strong>
                  <span className={`${style.data} float-end`}> $43.242 </span>
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
