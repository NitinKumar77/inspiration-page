import React from "react";
import { Box } from "@mui/material";

import playlistImage from "../../../icons/img.png";

import Comments from "./Comments/Comments";
import Description from "./Description/Description";

function PlaylistDescription() {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Playlist image */}
      <Box
        sx={{
          height: "634px",
          width: "100%",
          background: `url(${playlistImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50%",
          backgroundColor: "lightgray",
        }}
      ></Box>

      {/* Description */}
      <Description />
      {/* Comments */}
      <Comments />
    </Box>
  );
}

export default PlaylistDescription;
