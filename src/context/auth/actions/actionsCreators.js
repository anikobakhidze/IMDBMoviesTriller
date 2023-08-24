import {
  userLoggedIn,
  userLoggedOut,
  authenticateUser,
  searchMovie,
  clearSearchMovie,
  addMovies,
  clearMovies,
  error,
  isLoading,
} from "./actions";
export const userLogIn = (payload) => {
  return {
    type: userLoggedIn,
    payload: payload,
  };
};
export const userLogOut = () => {
  return {
    type: userLoggedOut,
  };
};
export const UserAuthenticate = (payload) => {
  return { type: authenticateUser, payload };
};

export const SearchMovie = (payload) => {
  return {
    type: searchMovie,
    payload,
  };
};
export const ClearSearchMovie = () => {
  return {
    type: clearSearchMovie,
  };
};
export const AddMovies = (payload) => {
  return {
    type: addMovies,
    payload,
  };
};
export const ClearMovies = () => {
  return {
    type: clearMovies,
  };
};
export const searchError = (payload) => {
  return {
    type: error,
    payload,
  };
};
export const searchIsLoading = (payload) => {
  return {
    type: isLoading,
    payload,
  };
};
