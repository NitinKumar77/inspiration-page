import { Box, Typography } from "@mui/material";
import React from "react";
import bannerImage from "../../icons/bannerImage.jpg";
import "./Banner.css";

const bannerStyles = {
  root: {
    backgroundImage: `url(${bannerImage})`,
    width: "100%",
    height: "270px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    gap: "8px",
    paddingLeft: "135px",
  },
  title: {
    color: "var(--neutral-n-0, #FFF)",
    fontFamily: "Inter",
    fontSize: 48,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "54px",
  },
  assistiveText: {
    color: "var(--neutral-n-0, #FFF)",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: "24px",
  },
};

function Banner() {
  return (
    <Box sx={bannerStyles.root}>
      <Box sx={bannerStyles.content}>
        <Typography sx={bannerStyles.title}>Inspiration Hub</Typography>
        <Typography
          paragraph
          className="banner-assistiveText"
          sx={bannerStyles.assistiveText}
        >
          Browse all the awesome work created by Content Symphony studios. Get
          inspiration for your next brief.
        </Typography>
      </Box>
    </Box>
  );
}

export default React.memo(Banner);
