import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Start from "./pages/Start";

import App from "./App";

import Visuel from "./pages/Visuel";
import Olfactif from "./pages/Olfactif";
import Gustatif from "./pages/Gustatif";
import Summary from "./pages/Summary";
import Score from "./pages/Score";

import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/start",
    element: <Start />,
  },
  {
    path: "/:id/",
    element: <App />,
    children: [
      {
        path: "visuel",
        element: <Visuel />,
      },
      {
        path: "olfactif",
        element: <Olfactif />,
      },
      {
        path: "gustatif",
        element: <Gustatif />,
      },
      {
        path: "score",
        element: <Score />,
      },
    ],
  },
  {
    path: "/:id/summary",
    element: <Summary />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
