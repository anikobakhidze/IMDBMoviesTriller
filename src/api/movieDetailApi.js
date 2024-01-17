async function movieDetailApi(movieId) {
  const url = `https://imdb-top-100-movies.p.rapidapi.com/${movieId}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key:": process.env.REACT_APP_KEY,
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    throw new Error("Failed to fetch movies");
  } catch (error) {
    throw new Error(error.message);
  }
}
export default movieDetailApi;
