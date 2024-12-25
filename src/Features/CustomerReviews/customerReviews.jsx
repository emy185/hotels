import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import profile1 from "../../assets/images/profile 1.jpg";
import profile2 from "../../assets/images/profile 2.jpg";
import profile3 from "../../assets/images/profile 3.jpg";
import profile4 from "../../assets/images/profile 4.jpeg";
import profile5 from "../../assets/images/profile 5.jpeg";
import Styles from "./customerReviews.module.css";

function CustomerReviews() {
  return (
    <Container className="text-center my-5">
      <h2 className="fw-bold">Customer Reviews</h2>
      <br />
      <i class={`fa-solid fa-quote-left ${Styles.icon}`}></i>
      <div className="my-4">
        <blockquote className="blockquote col-8 mx-auto">
          <p className="mb-4">
            "The tours on this website are great. I had been really enjoying it
            with my family! The team is very professional and takes care of the
            customers. Will surely recommend my friends to join this company!"
          </p>
          <footer className="blockquote-footer">
            <cite>
              Ali Tufan <br />
              <span className="text-muted">Product Manager, Apple Inc.</span>
            </cite>
          </footer>
        </blockquote>
      </div>
      <Row className="justify-content-center mt-4 mx-2">
        {[profile1, profile2, profile3, profile4, profile5].map(
          (profile, index) => (
            <Col xs={6} sm={4} md={2} key={index} className="mb-3">
              <div className="border-0 mx-1">
                <Image
                  src={profile}
                  roundedCircle
                  className={`${Styles.imgsz} border border-warning p-1`}
                />
              </div>
            </Col>
          )
        )}
      </Row>
    </Container>
  );
}

export default CustomerReviews;
