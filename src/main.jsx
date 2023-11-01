import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
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
    path: "home",
    element: <Home />,
  },
  {
    path: "/:id/visuel",
    element: <Visuel />,
  },
  {
    path: "/:id/olfactif",
    element: <Olfactif />,
  },
  {
    path: "/:id/gustatif",
    element: <Gustatif />,
  },
  {
    path: "/:id/recapitulatif",
    element: <Summary />,
  },
  {
    path: "/:id/score",
    element: <Score />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
