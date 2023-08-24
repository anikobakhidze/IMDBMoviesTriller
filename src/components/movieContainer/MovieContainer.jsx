import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/movieContainer.module.css";
import { FaPlayCircle } from "react-icons/fa";
function MovieContainer({ movie }) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const movieRef = useRef(null);
  useEffect(() => {
    const handleHover = (event) => {
      setHover(event.type === "mouseover");
    };
    movieRef.current.addEventListener("mouseover", handleHover);
    movieRef.current.addEventListener("mouseout", handleHover);
  }, []);
  return (
    <div
      ref={movieRef}
      className={styles.movieContainer}
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <div>
        <img src={movie.image} alt="moviePic" />
        <div className={styles.movieInfo}>
          <h3>{movie.title}</h3>

          <div className={styles.movieRating}>
            <p>IMDB</p>
            <p>{movie.rating}</p>
          </div>
        </div>
      </div>

      {hover && (
        <div className={styles.movieHover}>
          <div className={styles.playButtonWrapper}>
            <FaPlayCircle />
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieContainer;
