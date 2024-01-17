import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieDetailApi from "../../api/movieDetailApi.js";
import { ClipLoader } from "react-spinners";
import styles from "./css/movieDetails.module.css";
import sty from "../../sharedCss/sharedCssForPages/sharedCssForPages.module.css";
import GoBackButton from "../goBackButton/GoBackButton.jsx";
import { checkQuantity } from "../../constants/constants.js";
import useDocumentTitle from "../../hook/useDocumentTitle.jsx";
function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    movieDetailApi(movieId)
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);
  const title = error ? "Error" : movie.title;
  useDocumentTitle(title);

  return (
    <>
      {isLoading && (
        <div className={sty.errorFetch}>
          <ClipLoader />
        </div>
      )}
      {error ? (
        <div className={sty.errorFetch}>
          <p className={styles.errorFetchP}>Ups.. Error: {error}</p>
        </div>
      ) : (
        movie && (
          <div className={styles.movieDetailsContainer}>
            <div className={styles.goBackButtonWrapper}>
              <GoBackButton />
            </div>
            <h1>{movie.title}</h1>
            <div className={styles.movieTrailerWrapper}>
              <iframe
                title="movie-trailer"
                src={movie.trailer_embed_link}
                allowFullScreen
              />
            </div>
            <div className={styles.movieDetailsInfoWrapper}>
              <img src={movie.image} alt="movieImg" />
              <div className={styles.movieDetailsInfo}>
                <div className={styles.info}>
                  <h3>Year of Publish:</h3>
                  <p>{movie.year}</p>
                </div>
                <div className={styles.info}>
                  <h3>Director:</h3>
                  <p>{checkQuantity(movie.director, movie)}</p>
                </div>
                <div className={styles.info}>
                  <h3>Genre:</h3>
                  <p>{checkQuantity(movie.genre, movie)}</p>
                </div>
                <div className={styles.info}>
                  <h3>Writers:</h3>
                  <p>{checkQuantity(movie.writers, movie)}</p>
                </div>
                <div className={styles.info}>
                  <h3>IMDB:</h3>
                  <p>{movie.rating}</p>
                </div>
              </div>
            </div>
            <div className={styles.descriptionWrapper}>
              <h3>Description</h3>
              <p>{movie.description}</p>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default MovieDetails;
