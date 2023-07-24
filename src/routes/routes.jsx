import { Rightbar } from "../components";
import Home from "../pages/Home";
import PlaylistDescripition from "../pages/PlaylistDescripition";
export const routes = [
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
];
