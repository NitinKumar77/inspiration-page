import React from "react";
import { Box, Button, Typography } from "@mui/material";
import playlistHeaderImage from "../../icons/playlist_head.jpg";
import "./Playlist.css";
function PlaylistHeader() {
  return (
    <Box
      display="flex"
      justifyContent={"space-evenly"}
      alignItems={"center"}
      margin={"72px"}
      sx={{
        background: `url(${playlistHeaderImage}) no-repeat`,
        height: "88px",
        margin: "48px 0px",
      }}
    >
      <Typography
        sx={{
          color: "var(--neutral-n-1000, #05051E)",
          /* Heading/Heading-Emphasis-1 */
          fontSize: "20px",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "28px",
          margin: "0px 120px",
        }}
      >
        Fred’s - Picks of the month playlist
      </Typography>
      <Box
        className="header_button_box"
        direction="row"
        spacing={1}
        sx={{ backgroundColor: "white" }}
      >
        <Button
          className="playlist-header__button"
          variant="contained"
          sx={{
            backgroundColor: "var(--blue-b-500, #076CDF)",
            textTransform: "none",
          }}
        >
          Internal{" "}
        </Button>
        <Button
          className="playlist-header__button"
          sx={{
            color: "#60607D",
            backgroundColor: "white",
            textTransform: "none",
          }}
        >
          External
        </Button>
      </Box>
    </Box>
  );
}

export default PlaylistHeader;
