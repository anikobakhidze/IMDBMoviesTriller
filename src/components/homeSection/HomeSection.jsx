import React from "react";
import useMovies from "../../hook/useMovies.jsx";
import { PacmanLoader } from "react-spinners";
import MovieContainer from "../movieContainer/MovieContainer.jsx";
import { responsive } from "./responsive.js";
import styles from "./css/homeSection.module.css";
import sty from "../../sharedCss/sharedCssForPages/sharedCssForPages.module.css";
import { FaSadTear, FaFilm } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider.css";

function HomeSection() {
  const [movies, isLoading, error] = useMovies();
  return (
    <>
      {error ? (
        <div className={sty.errorFetch}>
          <FaSadTear />
          <p>{error.message}</p>
        </div>
      ) : (
        <div className={styles.movieHeaderContainer}>
          <div className={styles.movieHeaderWrapper}>
            <div className={styles.filmLogo}>
              <FaFilm size={40} />
            </div>
            <h4 className={styles.moviesHeader}>Top Rated Films</h4>
          </div>
        </div>
      )}
      {isLoading && (
        <div className={sty.errorFetch}>
          <PacmanLoader />
        </div>
      )}

      <div className={!error && styles.homeWrapper}>
        <Slider {...responsive} className={styles.moviesContainer}>
          {movies.map((movie) => (
            <MovieContainer key={movie.rank} movie={movie} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default HomeSection;
