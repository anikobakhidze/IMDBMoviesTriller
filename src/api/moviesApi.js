async function moviesApi() {
  const url = process.env.REACT_APP_MOVIES;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "afca540431msh6140a87be457925p16cde7jsn7ffb7118a75a",
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
export default moviesApi;
