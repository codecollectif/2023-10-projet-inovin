import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Start from "./pages/Start";

import App from "./App";

import Visual from "./pages/Visual";
import Olfactory from "./pages/Olfactory";
import Taste from "./pages/Taste";
import Summary from "./pages/Summary";
import Score from "./pages/Score";

import "./main.css";

import Papa from "papaparse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/start",
    loader: () => {
      return new Promise((resolve) => {
        const URL =
          "https://docs.google.com/spreadsheets/d/1Q2L2mJr6xuxMMcktiQ2i8oDr68ag_bVjXLwdUx4CKCM/export?exportFormat=csv&format=csv?pli=1#gid=0";

        Papa.parse(URL, {
          download: true,
          complete: function (result) {
            resolve(result.data.flat());
          },
        });
      });
    },
    element: <Start />,
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
      {
        path: "score",
        element: <Score />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
