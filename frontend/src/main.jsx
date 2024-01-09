import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Page404 from "./pages/Page404/Page404";
import Home from "./pages/Home/Home";
import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
