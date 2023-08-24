import { useEffect, useState } from "react";
import moviesApi from "../api/moviesApi";

function useMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    moviesApi()
      .then((data) => setMovies(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return [movies, isLoading, error];
}

export default useMovies;
