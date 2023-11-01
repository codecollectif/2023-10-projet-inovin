import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Visual from "./pages/Visual";
import Olfactory from "./pages/Olfactory";
import Taste from "./pages/Taste";
import Summary from "./pages/Summary";
import Score from "./pages/Score";
import TestContext from "./pages/TestContext";
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
    element: <Visual />,
  },
  {
    path: "/:id/olfactif",
    element: <Olfactory />,
  },
  {
    path: "/:id/gustatif",
    element: <Taste />,
  },
  {
    path: "/:id/recapitulatif",
    element: <Summary />,
  },
  {
    path: "/:id/score",
    element: <Score />,
  },
  {
    path: "/test",
    element: <TestContext />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
