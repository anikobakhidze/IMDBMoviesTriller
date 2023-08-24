import React, { useState, useRef, useEffect } from "react";
import SearchBar from "../searchBar/SearchBar.jsx";
import SearchResults from "../searchResults/SearchResults.jsx";
import styles from "./css/search.module.css";

function Search() {
  // const [results, setResults] = useState([]);
  const resultsRef = useRef();
  const [showResult, setShowResults] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        setShowResults(false);
      } else {
        setShowResults(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.searchWrapper} ref={resultsRef}>
      <SearchBar
      // setResults={setResults}
      />
      {showResult && (
        <SearchResults
        // results={results}
        />
      )}
    </div>
  );
}

export default Search;
