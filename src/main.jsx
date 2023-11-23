import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

import "./main.css";

//const oldURL = "https://docs.google.com/spreadsheets/d/1IKLybL1aU7br0tjb7KLa1BTskjQHeIf96WAjG5dlQ9Y/export?exportFormat=csv&format=csv#gid=0"

const router = createBrowserRouter([
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
    /* loader: () => {
      return new Promise((resolve) => {
        const URL = "https://docs.google.com/spreadsheets/d/1Q2L2mJr6xuxMMcktiQ2i8oDr68ag_bVjXLwdUx4CKCM/export?exportFormat=csv&format=csv?pli=1#gid=0"
        
        Papa.parse(URL, {
          download: true,
          complete: function (result) {
            resolve(result.data.flat());
          },
        });
      });
    }, */
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WineContextProvider>
      <RouterProvider router={router} />
    </WineContextProvider>
  </React.StrictMode>
);
