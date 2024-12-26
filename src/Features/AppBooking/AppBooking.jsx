import React from "react";
import style from "./AppBooking.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import image from "../../assets/images/1 (1).png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

function AppBooking() {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      toast.success("Email sent successfully!");
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <>
      <section className={style.appBooking}>
        <Container>
          <Row>
            <Col lg={6} className={style.leftAppBooing}>
              <div className={style.centerAppBooking}>
                <h2>Get 5% off Your 1st app booking </h2>
                <span>
                  Booking's better on the app. Use promo code "ourBooking " to
                  save!
                </span>
                <p>Get a magic link sent to your email</p>

                {/* Formik form */}
                <Formik
                  initialValues={{ email: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, touched, errors }) => (
                    <Form>
                      <Row className={style.row}>
                        <Col lg={5}>
                          <Field
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={`form-control ${
                              touched.email && errors.email ? "is-invalid" : ""
                            }`}
                          />
                          {/* Error Message */}
                          <ErrorMessage
                            name="email"
                            component="div"
                            className={`$style{textDanger} ${
                              touched.email && errors.email
                                ? "d-block"
                                : "d-none"
                            }`}
                          />
                        </Col>
                        <Col lg={3}>
                          <Button
                            type="submit"
                            disabled={
                              isSubmitting || !touched.email || errors.email
                            }
                          >
                            Send <i className="fas fa-arrow-right"></i>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
            <Col lg={6} className={style.ImgsAppBooing}>
              <img src={image} alt="app imag" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
}

export default AppBooking;
