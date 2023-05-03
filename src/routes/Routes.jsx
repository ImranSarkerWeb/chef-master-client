import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Recipes from "../pages/Recipes/Recipes";
import Blog from "../pages/Blog/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
        loader: () => fetch("http://localhost:5000/questions"),
      },
      {
        path: "/recipes/:id",
        element: <Recipes></Recipes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipes/${params.id}`),
      },
    ],
  },
]);
export default router;
