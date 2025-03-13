import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/home/Home";

const Routes: React.FC = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/contact", element: <Contact /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
