import { FaSadTear, FaSearch } from "react-icons/fa";
import moviesApi from "../../api/moviesApi.js";
import React from "react";
import { useAuthContext } from "../../context/auth/AuthContextProvider.jsx";
import {
  SearchMovie,
  AddMovies,
  searchError,
  searchIsLoading,
} from "../../context/auth/actions/actionsCreators";
import styles from "./css/searchBar.module.css";

function SearchBar() {
  const {
    state: { movieName, error },
    dispatch,
  } = useAuthContext();
  const fetchData = (value) => {
    moviesApi()
      .then((data) => {
        dispatch(searchIsLoading(true));
        const results = data.filter((movie) => {
          return (
            value &&
            movie &&
            movie.title &&
            movie.title.toLowerCase().includes(value)
          );
        });
        dispatch(SearchMovie(results));
      })
      .catch((error) => dispatch(searchError(error.message)))
      .finally(() => dispatch(searchIsLoading(false)));
  };
  const handleChange = (value) => {
    dispatch(AddMovies(value));
    fetchData(value);
  };
  return (
    <>
      {error ? (
        <div>
          {error} <FaSadTear />
          Refresh WebPage
        </div>
      ) : (
        <div className={styles.searchBarContainer}>
          <FaSearch />
          <input
            type="text"
            placeholder="Search"
            value={movieName}
            onChange={(event) => handleChange(event.target.value)}
          />
        </div>
      )}
    </>
  );
}

export default SearchBar;
