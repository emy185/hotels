import React, { useState } from "react";
import data from "../../../assets/data/Data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationPin,
  faStar,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../Components/Pagination/Pagination";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion

function TourPosts() {
  const phuketData = data.hotelsPhupket || [];

  ///create pagination requirements

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = phuketData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(phuketData.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            size="sm"
            color="rgb(185, 152, 2)"
          />
        );
      } else if (i === fullStars + 1 && halfStar) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            size="sm"
            color="rgb(185, 152, 2)"
            style={{ opacity: 0.5 }}
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} size="sm" color="lightgray" />
        );
      }
    }

    return stars;
  };

  // Animation variants  /////motionadd
  const navigate = useNavigate();
  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <>
      <p className="results-number">{phuketData.length} results</p>
      <div className="CardsOfPhuketThing ">
        {/* Make a transation in showing pages */}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage} // Use currentPage as the key for animation
            variants={pageVariants} ////motion
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            {/* Maping in data to create cards */}
            {phuketData.map((item, index) => (
              <div key={index} className="cardContainer mb-5 ">
                <div className="row ">
                  {/* Image Section */}
                  <div className="col-lg-4 Image-Section">
                    <img
                      src={item.image}
                      className="img-fluid rounded-start cardImage  "
                      alt={`${item.name}`}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="col-lg-5">
                    {/* <div> */}
                    <div className="card-body d-flex h-100 justify-content-between p-0 m-0">
                      <small className="countryName">
                        <FontAwesomeIcon
                          icon={faLocationPin}
                          size="lg"
                          className="location-icon me-2"
                        />
                        {item.country}
                      </small>
                      <p className="card-title">{item.name}</p>
                      <p className="rating">
                        <span className="stars d-inline me-2">
                          {renderStars(item.rating)}
                        </span>
                        <span>{item.rating}</span>
                      </p>
                      <p className="card-description">{item.description}</p>
                      <div className="d-flex flex-row justify-content-between verification">
                        <div>{item.detailsImage1}</div>
                        <div className="me-4">
                          <FontAwesomeIcon
                            icon={faCheck}
                            size="sm"
                            className="arrow-icon me-2"
                          />
                          {item.detailsImage2}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price & Details Section */}
                  <div className="col-lg-3 p-0 text-center d-flex flex-column justify-content-between">
                    <div className="mb-5 pt-4 ">
                      <p>
                        <FontAwesomeIcon
                          icon={faClock}
                          size="sm"
                          color="gray"
                        />{" "}
                        2 Days 1 Night
                      </p>
                    </div>
                    <div>
                      <p className="text-decoration-line-through p-0 m-0">
                        $1200
                      </p>
                      <p className="priceText">
                        From{" "}
                        <span className="fw-semibold fs-5">
                          ${item.price_per_night}
                        </span>
                      </p>
                      <button
                        className="detailsButton"
                        onClick={() => {
                          navigate("/HotelDetails");
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination section */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalResults={phuketData.length}
        resultsPerPage={postsPerPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default TourPosts;
