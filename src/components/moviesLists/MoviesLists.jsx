import React, { useState } from "react";
import useMovies from "../../hook/useMovies.jsx";
import { ClipLoader } from "react-spinners";
import MovieContainer from "../movieContainer/MovieContainer.jsx";
import Pagination from "../pagination/Pagination.jsx";
import { FaSadTear } from "react-icons/fa";
import styles from "./css/movieLists.module.css";
import sty from "../../sharedCss/sharedCssForPages/sharedCssForPages.module.css";
function MoviesLists() {
  const [movies, isLoading, error] = useMovies();
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 20;
  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;
  return (
    <>
      {isLoading && (
        <div className={sty.errorFetch}>
          <ClipLoader />
        </div>
      )}
      {error ? (
        <div className={sty.errorFetch}>
          <FaSadTear />
          <p>{error.message}</p>
        </div>
      ) : (
        <div className={styles.moviesContainer}>
          <div className={styles.moviesListContainer}>
            {movies.slice(firstMovieIndex, lastMovieIndex).map((movie) => (
              <MovieContainer key={movie.rank} movie={movie} />
            ))}
          </div>
          <Pagination
            totalMovies={movies.length}
            moviesPerPage={moviesPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </>
  );
}

export default MoviesLists;
