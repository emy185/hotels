import React from "react";
import { FaStar } from "react-icons/fa6";
import imgs from "../../assets/images/reply-img.png";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import "./style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Reviews() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    title: Yup.string()
      .required("Title is required")
      .max(50, "Title cannot exceed 50 characters"),
    comment: Yup.string()
      .required("Comment is required")
      .min(50, "Comment must be at least 50 characters"),
  });

  const initialValues = {
    name: "",
    email: "",
    title: "",
    comment: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form data:", values);
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };
  return (
    <div className="py-4 reviews w-75">
      <div className="reply-info">
        <div>
          <h1 className="fs-6">A.T</h1>
          <p className="fs-5">Ali Tufan</p>
        </div>
        <span className="text-secondary">April 2023</span>
      </div>
      <div className="rating pb-3">
        <div>
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
        </div>
        <span>Take this tour! Its fantastic!</span>
      </div>
      <span>
        Great for 4-5 hours to explore. Really a lot to see and tons of photo
        spots. Even have a passport for you to collect all the stamps as a
        souvenir. Must see for a Harry Potter fan.
      </span>
      <br />
      <img src={imgs} alt="reply-imgs" className="w-50 mt-3" />
      <div className="reactions mt-3 mb-4">
        <button className="text-dark">
          <AiFillLike /> Helpful
        </button>
        <button className="text-dark">
          <AiFillDislike /> Not Helpful
        </button>
      </div>
      <button className="see-reviews">
        See more reviews <GoArrowUpRight className="fs-4" />
      </button>
      <div className="reply mt-5">
        <h1 className="pb-2">Leave a Reply</h1>
        <span>
          Your email address will not be published. Required fields are marked *
        </span>
        <div className="my-3 rating-container">
          <div className="container-rows">
            <div className="mb-4 container-item">
              <span>Location</span>
              <div>
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
              </div>
            </div>
            <div className="mb-4 container-item">
              <span>Amenities</span>
              <div>
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
              </div>
            </div>
            <div className="mb-4 container-item">
              <span className="food">Food</span>
              <div>
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
              </div>
            </div>
          </div>

          <div className="container-rows">
            <div className="container-item">
              <span className="room">Room</span>
              <div>
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
              </div>
            </div>
            <div className="container-item">
              <span className="price">Price</span>
              <div>
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
              </div>
            </div>
            <div className="container-item">
              <span>Tour Operator</span>
              <div>
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
              </div>
            </div>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="form-row-1">
              <div className="mb-4 w-50">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>

              <div className="mb-4 w-50">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>
            </div>
            <div className="mb-4">
              <Field
                type="text"
                id="title"
                name="title"
                className="form-control"
                placeholder="Title"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            <div className="mb-4">
              <Field
                as="textarea"
                id="comment"
                name="comment"
                className="form-control"
                rows="4"
                placeholder="Comment"
              />
              <ErrorMessage
                name="comment"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            <button type="submit" className="reply-button">
              Post Comment <GoArrowUpRight className="fs-4" />
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
export default Reviews;
