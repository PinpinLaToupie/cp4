import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Contexts/UserContext";

import Page404 from "./pages/Page404/Page404";
import Home from "./pages/Home/Home";
import Carousel from "./pages/Carousel/Carousel";
import Compte from "./pages/Compte/Account";

import App from "./App";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/carousel",
        element: <Carousel />,
      },
      {
        path: "/moncompte",
        element: <Compte />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </UserProvider>
  </React.StrictMode>
);
