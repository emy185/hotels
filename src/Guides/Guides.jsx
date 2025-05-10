import React, { useState, useEffect } from "react";
import data from "../../assets/data/Data.json";
import DistinationHeader from "../../Components/DistinationHeader/DistinationHeader";
import styles from "./styles/Guides.module.css";
import Pagination from "../../Components/Pagination/Pagination";
import { Link } from "react-router-dom";

const Guides = () => {
  const posts = data.tripPosts;
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedCategory, setSelectedCategory] = useState("All Guide");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const categories = [
    "All Guide",
    "Africa",
    "Asia",
    "Europe",
    "North America",
    "South America Guide",
  ];

  useEffect(() => {
    if (selectedCategory === "All Guide") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => post.category === selectedCategory)
      );
    }
  }, [selectedCategory, posts]);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <DistinationHeader
        title="Your guide to everywhere"
        subtitle="Find inspiration, guides and stories for wherever you're going. Select a destination."
      />

      <div className="container mt-4 text-center">
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.buttonCustom} ${
              selectedCategory === category ? styles.activeButton : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="container mt-5">
        <div className="row">
          {currentPosts.map((post) => (
            <div className="col-md-4" key={post.id}>
              <div className="card mb-4 position-relative">
                <span className={styles.badge}>Trips</span>
                <img
                  src={require(`../../assets/images/${post.mainImage}`)}
                  className="card-img-top"
                  alt={post.title}
                />
                <div className="card-body">
                  <p>
                    <small className="text-muted">
                      {post.date} | By {post.author}
                    </small>
                  </p>
                  <h6 className={`card-title `}>
                    <Link
                      to={`/TripsDetailsPage/${post.id}`}
                      className={`text-decoration-none ${styles.cardColor}`}
                    >
                      {post.title}
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalResults={filteredPosts.length}
        resultsPerPage={postsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Guides;
