import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Styles from "./customerReviews.module.css";
import data from "../../assets/data/Data.json";

function CustomerReviews() {
  const users = data.users;
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (users && users.length > 0) {
      setSelectedUser(users[0]);
    }
  }, [users]);

  if (!users || users.length === 0) {
    return <div>No user available</div>;
  }

  if (!selectedUser) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <Container className="text-center my-5">
      <h2 className="fw-bold">Customer Reviews</h2>
      <br />
      <i className={`fa-solid fa-quote-left ${Styles.icon}`}></i>
      <div className="my-4">
        <blockquote className="blockquote col-8 mx-auto">
          <p className="mb-4">"{selectedUser.review}"</p>
          <footer className="blockquote-footer">
            <cite>
              {selectedUser.name} <br />
              <span className="text-muted">{selectedUser.role}</span>
            </cite>
          </footer>
          <p className="mt-3 text-muted">{selectedUser.email}</p>
        </blockquote>
      </div>
      <Row className="justify-content-center mt-4 mx-2">
        {users.map((user) => (
          <Col xs={6} sm={4} md={2} key={user.id} className="mb-3">
            <div
              className={`border-0 mx-1`}
              onClick={() => setSelectedUser(user)}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={require(`../../assets/images/${user.image}`)}
                roundedCircle
                className={`${Styles.imgsz} ${selectedUser.id === user.id ? Styles.active : ""}`}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CustomerReviews;
