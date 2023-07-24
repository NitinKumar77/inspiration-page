import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import PlaylistDescripition from "./components/playlist/playlistDescription/PlaylistDescripition";
import { Rightbar } from "./components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Rightbar />,
      },
      {
        path: "/:playlistId",
        element: <PlaylistDescripition />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);
