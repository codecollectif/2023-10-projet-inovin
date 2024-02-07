import React from "react";
import ReactDOM from "react-dom/client";
import { createRouter, RouterProvider } from "react-router-dom";
import { WineContextProvider } from "./contexts/WineContext";

import Welcome from "./pages/Welcome";
import Select from "./pages/Select";
import Start from "./pages/Start";
import Profile from "./pages/Profile";

import App from "./App";

import Visual from "./pages/Visual";
import Olfactory from "./pages/Olfactory";
import Taste from "./pages/Taste";
import Summary from "./pages/Summary";

import Workshop from "./pages/Workshop";
import Finish from "./pages/Finish";
import Form from "./pages/Form";

import "./main.css";


const router = createRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/select",
    element: <Select />,
  },
  {
    path: "/start",
    element: <Start />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/creation",
    element: <Workshop />,
  },
  {
    path: "/finish",
    element: <Finish />,
  },
  {
    path: "/formulaire",
    element: <Form />
  },
  {
    path: "/:id/",
    element: <App />,
    children: [
      {
        path: "visuel",
        element: <Visual />,
      },
      {
        path: "olfactif",
        element: <Olfactory />,
      },
      {
        path: "gustatif",
        element: <Taste />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
    ],
  },
], {
  basename: import.meta.env.MODE === "production" ? "/2023-10-projet-inovin" : "",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WineContextProvider>
      <RouterProvider router={router} />
    </WineContextProvider>
  </React.StrictMode>
);
