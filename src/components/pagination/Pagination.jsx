import React from "react";
import styles from "./css/pagination.module.css";
function Pagination({ totalMovies, moviesPerPage, setCurrentPage }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.paginationWrapper}>
      {pages.map((page) => (
        <button key={page} onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
