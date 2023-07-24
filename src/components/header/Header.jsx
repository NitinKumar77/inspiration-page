import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import homeIcon from "../../icons/🖼 Home Button.svg";
import dentsuLogo from "../../icons/Dod logo.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <Box className="header" display="flex">
      <IconButton
        color="inherit"
        aria-label="home"
        flex={1}
        sx={{ padding: "0px" }}
        onClick={() => navigate("/")}
      >
        <img src={homeIcon} alt="home icon" />
      </IconButton>
      <Box
        className="header-dod"
        flex={20}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={5}
          marginLeft={"32px"}
        >
          <img src={dentsuLogo} alt="dentsu-logo" width={166} height={14} />
          <Typography className="header-dod__text">Content Library</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
