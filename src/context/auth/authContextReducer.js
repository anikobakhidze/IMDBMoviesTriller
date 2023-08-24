import {
  authenticateUser,
  userLoggedIn,
  userLoggedOut,
  searchMovie,
  clearSearchMovie,
  addMovies,
  clearMovies,
  error,
  isLoading,
} from "./actions/actions";
import decodeToken, { toggleLocalStorage } from "../../utils/jwt";
export const initialValue = {
  isUserLoggedIn: false,
  user: {},
  results: [],
  movieName: "",
  error: "",
  isLoading: false,
};

export const authContextReducer = (state, actions) => {
  const { type, payload } = actions;
  let user;
  switch (type) {
    case userLoggedIn:
      user = decodeToken(payload.token);
      toggleLocalStorage(payload.token);
      return { ...state, isUserLoggedIn: true, user: user };
    case userLoggedOut:
      toggleLocalStorage();
      return { ...state, isUserLoggedIn: false, user: {} };
    case authenticateUser:
      return { ...state, isUserLoggedIn: true, user: payload };
    case searchMovie:
      return { ...state, results: payload };
    case clearSearchMovie:
      return { ...state, results: [] };
    case addMovies:
      return { ...state, movieName: payload };
    case clearMovies:
      return { ...state, movieName: "" };
    case error:
      return { ...state, error: payload };
    case isLoading:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};
