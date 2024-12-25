import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import baliImg from "../../assets/images/Trending-1.jpg";
import romeImg from "../../assets/images/Trending-2.jpg";
import phuketImg from "../../assets/images/Trending-3.jpg";
import parisImg from "../../assets/images/Trending-4.jpg";
import styles from "./styles/TrendingDistination.module.css";
const destinations = [
  { name: "Bali", tours: "100+ Tours", img: baliImg },
  { name: "Rome", tours: "100+ Tours", img: romeImg },
  { name: "Phuket", tours: "100+ Tours", img: phuketImg },
  { name: "Paris", tours: "100+ Tours", img: parisImg },
];

const TrendingDestinations = () => {
  return (
    <div className={styles.background}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <h3>Trending Destinations</h3>
          <Button variant="link" className="text-white">
            See all &rarr;
          </Button>
        </div>
        <Row>
          {destinations.map((destination, index) => (
            <Col
              key={index}
              sm={6}
              md={4}
              lg={3}
              className="mb-4 d-flex justify-content-center"
            >
              <Card className={`${styles.card} text-white`}>
                <Card.Img
                  src={destination.img}
                  alt={destination.name}
                  className={styles.cardImage}
                />
                <Card.ImgOverlay className={styles.cardOverlay}>
                  <Card.Title className={styles.cardTitle}>
                    {destination.name}
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    {destination.tours}
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TrendingDestinations;
