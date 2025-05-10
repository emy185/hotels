import React from "react";
import styles from "./styles/Pagination.module.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.paginationContainer}>
      <ul className={styles.pagination}>
        <li
          className={`${styles.pageItem} ${
            currentPage === 1 ? styles.disabled : ""
          }`}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        >
          &lt;
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={`${styles.pageItem} ${
              currentPage === page ? styles.active : ""
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
        <li
          className={`${styles.pageItem} ${
            currentPage === totalPages ? styles.disabled : ""
          }`}
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
        >
          &gt;
        </li>
      </ul>
      <p className={styles.resultsInfo}>
        Showing results {(currentPage - 1) * 9 + 1}-
        {Math.min(currentPage * 9, 1415)} of 1415
      </p>
    </div>
  );
};

export default Pagination;
