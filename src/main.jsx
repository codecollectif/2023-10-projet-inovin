import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Visual from "./pages/Visual";
import Olfactory from "./pages/Olfactory";
import Taste from "./pages/Taste";
import Summary from "./pages/Summary";
import Score from "./pages/Score";
import Profile from "./pages/Profile";
import "./main.css";
import { WineContextProvider } from "./contexts/Context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WineContextProvider>
      <RouterProvider router={router} />
    </WineContextProvider>
  </React.StrictMode>
);
