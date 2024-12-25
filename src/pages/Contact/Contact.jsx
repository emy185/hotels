import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import WaveSVG from "../../assets/images/shape.svg";
import styles from "./Contact.module.css";

console.log("Hello");
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be digits")
    .required("Phone is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

function Contact() {
  const handleSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="position-relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5822219.590399478!2d9.975404057948008!3d44.5585468789369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2sMilan%2C%20Metropolitan%20City%20of%20Milan%2C%20Italy!5e0!3m2!1sen!2seg!4v1735146727979!5m2!1sen!2seg"
              width="100%"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <img
              src={WaveSVG}
              alt="Wave Shape"
              className={`${styles.waveShape}`}
            />
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col sm={3}>
            <h3>North America</h3>
            <p>1 Dundas St W Suite 2500 Toronto ON M5G 1Z3, Canada</p>
            <p>1-800-453-6744 canada@tourz.com</p>
          </Col>
          <Col sm={3}>
            <h3>Australia</h3>
            <p>123 Smith St, Melbourne, VIC 3000, Australia</p>
            <p>61-800-123-456 australia@tourz.com</p>
          </Col>
          <Col sm={3}>
            <h3>Europe</h3>
            <p>45 Rue du Faubourg Saint- Antoine, 75011 Paris, France</p>
            <p>33-800-987-654 europe@tourz.com</p>
          </Col>
          <Col sm={3}>
            <h3>Asia</h3>
            <p>Tokyo, Japan</p>
            <p>81-800-567-890 asia@tourz.com</p>
          </Col>
        </Row>

        <Row className="mt-5 justify-content-center">
          <Col md={8}>
            <Formik
              initialValues={{ name: "", phone: "", email: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange, handleSubmit, values, errors, touched }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <h4 className="text-center mb-4">Leave us your info</h4>

                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="formName">
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={values.name}
                          onChange={handleChange}
                          isInvalid={touched.name && errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="formPhone">
                        <Form.Control
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          value={values.phone}
                          onChange={handleChange}
                          isInvalid={touched.phone && errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={touched.email && errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-4">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      placeholder="Message"
                      value={values.message}
                      onChange={handleChange}
                      isInvalid={touched.message && errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    type="submit"
                    className={`${styles.bgcolor} w-100 p-3 fw-bold border-0`}
                  >
                    Send Message
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
