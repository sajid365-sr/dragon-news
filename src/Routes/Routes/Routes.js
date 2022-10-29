import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Ohters/Profile/Profile";
import TermsAndConditions from "../../Pages/Ohters/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://dragon-news-server-kappa-three.vercel.app/news"),
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`https://dragon-news-server-kappa-three.vercel.app/category/${params.id}`),
        element: <Category></Category>,
      },
      {
        path: "/news/:id",
        loader: ({ params }) =>
          fetch(`https://dragon-news-server-kappa-three.vercel.app/news/${params.id}`),
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
