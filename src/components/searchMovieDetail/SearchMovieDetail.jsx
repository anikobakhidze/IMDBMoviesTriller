import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth/AuthContextProvider.jsx";
import {
  ClearSearchMovie,
  ClearMovies,
} from "../../context/auth/actions/actionsCreators.js";
import styles from "./css/searchMoviesDetail.module.css";
function SearchMovieDetail({ result }) {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  return (
    <li
      className={styles.searchMovieDetail}
      onClick={() => {
        navigate(`/movies/${result.id}`);
        dispatch(ClearSearchMovie());
        dispatch(ClearMovies());
      }}
    >
      <img src={result.thumbnail} alt="thumbnail" />
      <p>{result.title}</p>
    </li>
  );
}

export default SearchMovieDetail;
