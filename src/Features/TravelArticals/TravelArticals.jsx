import React from 'react';
import style from './TravelArticals.module.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import data from '../../assets/data/Data.json';

function TravelArticals() {
    const tripPosts = data.tripPosts;

    if (!tripPosts || tripPosts.length === 0) {
        return <div>No trips available</div>;
    }

    return (
        <section className={style.travelSection}>
            <Container>
                {/* Header Section */}
                <Row className="d-flex justify-content-between align-items-center">
                    <Col lg={6}>
                        <h2 className={style.heading}>Travel Articles</h2>
                    </Col>
                    <Col lg={6} className="text-lg-end text-center">
                        <Link to="/Guides" className={style.link}>
                            See all <i className="fas fa-arrow-right"></i>
                        </Link>
                    </Col>
                </Row>

                {/* Cards Section */}
                <Row className={`${style.cards} justify-content-center`}>
                    {tripPosts.slice(0, 3).map((trip, index) => (
                        <Col xs={12} sm={8} md={6} lg={4} key={index} className="mb-4 d-flex justify-content-center">
                            <Link to={`/TripsDetailsPage/${trip.id}`} className={style.cardLink}>
                                <Card className={style.card}>
                                    <Card.Img
                                        variant="top"
                                        src={require(`../../assets/images/${trip.mainImage}`)}
                                        alt={`Trip image ${index + 1}`}
                                    />
                                    <span className={style.badge}>Trips</span>
                                    <Card.Body>
                                        <Card.Title className={style.cardTitle}>
                                            <span className={style.date}>{trip.date}</span> | <span className={style.author}>By {trip.author}</span>
                                        </Card.Title>
                                        <Card.Text className={style.cardText}>{trip.title}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default TravelArticals;
