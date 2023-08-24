import React from "react";
import SearchMovieDetail from "../searchMovieDetail/SearchMovieDetail.jsx";
import { useAuthContext } from "../../context/auth/AuthContextProvider.jsx";
import styles from "./css/searchResults.module.css";

function SearchResults() {
  const {
    state: { results },
  } = useAuthContext();

  return (
    <>
      {results.length > 0 && (
        <ul className={styles.searchResultsWrapper}>
          {results &&
            results.map((result) => (
              <SearchMovieDetail key={result.rank} result={result} />
            ))}
        </ul>
      )}
    </>
  );
}

export default SearchResults;
