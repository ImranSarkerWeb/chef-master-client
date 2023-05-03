/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home/Home";
// import Login from "../pages/Login/Login";
// import Register from "../pages/Login/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Recipes from "../pages/Recipes/Recipes";
// import Blog from "../pages/Blog/Blog";
import PrivateRouter from "./PrivateRouter";
import { Suspense, lazy } from "react";
import Loader from "../pages/shared/Loader";

const LoginPreview = lazy(() => import("../pages/Login/Login"));
const RegisterPreview = lazy(() => import("../pages/Login/Register"));
const BlogPreview = lazy(() => import("../pages/Blog/Blog"));

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
        element: (
          <Suspense fallback={<Loader />}>
            <LoginPreview></LoginPreview>
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<Loader />}>
            <RegisterPreview></RegisterPreview>
          </Suspense>
        ),
      },
      {
        path: "blog",
        element: (
          <Suspense fallback={<Loader />}>
            <BlogPreview></BlogPreview>
          </Suspense>
        ),
        loader: () =>
          fetch(
            "https://chef-master-server-imransarkerweb.vercel.app/questions"
          ),
      },
      {
        path: "/recipes/:id",
        element: (
          <PrivateRouter>
            <Recipes></Recipes>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-master-server-imransarkerweb.vercel.app/recipes/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
