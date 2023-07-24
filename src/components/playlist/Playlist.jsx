import React, { useEffect, useState } from "react";
import PlaylistHeader from "./PlaylistHeader";
import { Box, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import "./Playlist.css";

import mediaIcon from "../../icons/Media.svg";
import mediaIcon2 from "../../icons/Mobile-video.svg";
import { Link } from "react-router-dom";
import data from "../data";

function Playlist({ filterVariable }) {
  const [showGrid, setShowGrid] = useState(true);
  const [showImages, setShowImages] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGrid(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    const timer2 = setTimeout(() => {
      setShowImages(true);
    }, 4000);

    return () => {
      clearTimeout(timer2);
    };
  }, []);

  const filteredData =
    Object.keys(filterVariable).length === 0
      ? data
      : data.filter((item) => {
          for (const key in filterVariable) {
            console.log(key, item[key], filterVariable[key]);
            if (item[key] !== filterVariable[key]) {
              return false;
            }
          }
          return true;
        });

  console.log(filteredData);
  return (
    <Box className="playList-Box">
      <PlaylistHeader />
      {showGrid && (
        <Grid container spacing={0}>
          {Array.from({ length: 5 }).map((card, index) => (
            <Grid key={index}>
              <Box
                className="skelton"
                display="flex"
                justifyContent={"center"}
                alignItems={"end"}
                gap={"16px"}
                key={index}
                sx={{
                  maxWidth: 220,
                  height: 264,
                  marginRight: "10px",
                  marginBottom: "20px",
                }}
              >
                <Box
                  padding={"32px"}
                  display="flex"
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"16px"}
                >
                  <Skeleton variant="rectangular" width={30} height={30} />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={100}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
      <Typography
        variant="h4"
        className="playlist__heading-text"
        sx={{ marginBottom: "48px" }}
      >
        All Files
      </Typography>
      {showImages ? (
        <Grid container spacing={0}>
          {filteredData.map((card, index) => (
            <Grid key={index} item xs={4}>
              <Link to={`/lol${index}}`}>
                <Box
                  sx={{
                    maxwidth: 240,
                    height: 264,
                    marginRight: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "auto",
                      height: "264px",
                      borderRadius: "20px",
                      backgroundImage: `url(${card.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      "::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: "20px",
                        background:
                          "linear-gradient(180deg, rgba(5, 5, 30, 0) 29.29%, rgba(5, 5, 30, 0.88) 86.34%)",
                      },
                    }}
                  >
                    <Box className="imageContent">
                      <Box
                        width={40}
                        height={40}
                        className="mediaIcon-card"
                        sx={{
                          display: "flex",
                          padding: "10px",
                          alignitems: "flex-start",
                          gap: "10px",
                        }}
                      >
                        <img
                          src={card.image === "image1" ? mediaIcon2 : mediaIcon}
                          alt="mediaIcon"
                        />
                      </Box>
                      <Typography className="imageContent__text">
                        Generali Italia
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={0}>
          {Array.from({ length: 12 }).map((_, index) => (
            <Grid key={index} item xs={4}>
              <Box
                className="skelton"
                display="flex"
                justifyContent={"center"}
                alignItems={"end"}
                gap={"16px"}
                key={index}
                sx={{
                  maxwidth: 240,
                  height: 264,
                  marginRight: "10px",
                  marginBottom: "20px",
                }}
              >
                <Box
                  padding={"32px"}
                  display="flex"
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"16px"}
                >
                  <Skeleton variant="rectangular" width={30} height={30} />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={150}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Playlist;
