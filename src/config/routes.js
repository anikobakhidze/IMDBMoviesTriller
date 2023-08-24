import route from "../constants/routes.js";
import Home from "../page/home/Home.jsx";
import Movies from "../page/movies/Movies.jsx";
import MovieDetail from "../page/movieDetail/MovieDetail.jsx";
import SignIn from "../page/signIn/SignIn.jsx";
import SignUp from "../page/signUp/SignUp.jsx";
import Error from "../page/error/Error.jsx";
import AuthGuard from "../Guard/AuthGuard.jsx";
const routes = [
  {
    path: route.HOME,
    Component: Home,
    Guard: AuthGuard,
  },
  {
    path: route.MOVIES,
    Component: Movies,
    Guard: AuthGuard,
  },
  {
    path: route.MOVIEDETAIL,
    Component: MovieDetail,
    Guard: AuthGuard,
  },
  {
    path: route.SIGNIN,
    Component: SignIn,
  },
  {
    path: route.SIGNUP,
    Component: SignUp,
  },
  {
    path: "*",
    Component: Error,
  },
];
export default routes;
