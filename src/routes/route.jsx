import { useRoutes, Navigate, useLocation } from "react-router-dom";
import HomePage from "../views/HomePage";
import BlogPage from "../views/BlogPage";
import AlbumPage from "../views/AlbumPage";
import store from "../reducer/resso";
import { useEffect } from "react";
import TimeLinePage from "../views/TimeLinePage";
import AlbumListPage from "../views/AlbumListPage";
import GithubPage from "../views/GithubPage";

const AllRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomePage type={"home"} />,
    },
    {
      path: "/search",
      element: <HomePage type={"search"} />,
    },
    {
      path: "/blog/:id",
      element: <BlogPage />,
    },
    {
      path: "/album",
      element: <AlbumPage />,
    },
    {
      path: "/album/:id",
      element: <AlbumListPage />,
    },
    {
      path: "/timeline",
      element: <TimeLinePage />,
    },
    {
      path: "/github",
      element: <GithubPage />,
    },
    {
      path: "/about",
      element: <BlogPage id={1} />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
};
export default AllRoutes;
