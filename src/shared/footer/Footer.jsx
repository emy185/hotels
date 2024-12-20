import React from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import visa from "../../assets/images/visa.png";
import discover from "../../assets/images/discover.png";
import applePay from "../../assets/images/apple pay.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={`${styles.footer} mx-4 py-4`}>
        <Container>
          <Row className="justify-content-between">
            <Col md={6} className="fs-4">
              <i className="fa-solid fa-headset me-3"></i>
              Speak to our expert at <span>1-800-453-6744</span>
            </Col>
            <Col
              md={2}
              className="d-flex align-items-center justify-content-between"
            >
              Follow us
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </Col>
          </Row>

          <hr className="my-4" />

          <Row className="justify-content-between">
            <Col md={4}>
              <h5>Contact</h5>
              <p>328 Queensberry Street, North Melbourne VIC3051, Australia.</p>
              <p>hi@viatours.com</p>
            </Col>

            <Col md={2}>
              <h5>Company</h5>
              <p>About Us</p>
              <p>Tourz Reviews</p>
              <p>Contact Us</p>
              <p>Travel Guides</p>
              <p>Data Policy</p>
              <p>Cookie Policy</p>
              <p>Legal</p>
              <p>Sitemap</p>
            </Col>

            <Col md={2}>
              <h5>Support</h5>
              <p>Get in Touch</p>
              <p>Help Center</p>
              <p>Live Chat</p>
              <p>How it Works</p>
            </Col>

            <Col md={3}>
              <h5>Newsletter</h5>
              <p>Subscribe to the free newsletter and stay up to date</p>
              <InputGroup className="w-75">
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  className="border-0 shadow-none"
                />
                <Button variant="outline-primary" className="fw-bold">
                  Send
                </Button>
              </InputGroup>

              <h5 className="mt-4">Mobile Apps</h5>
              <p>
                <i className="fa-brands fa-apple me-2"></i>
                iOS App
              </p>
              <p>
                <i className="fa-brands fa-android me-2"></i>
                Android App
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className="align-items-center justify-content-between py-2">
          <Col md={6}>
            <p>&copy; Copyright Viatours 2024</p>
          </Col>
          <Col md={2} className="d-flex justify-content-end gap-2">
            <img src={visa} alt="Visa" />
            <img src={discover} alt="Discover" />
            <img src={applePay} alt="Apple Pay" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
