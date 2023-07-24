import { Box, Divider } from "@mui/material";
import React from "react";
import footerIcon from "../../icons/© Brand.svg";
import "./Footer.css";
function Footer() {
  return (
    <Box className="Footer-main">
      <Box sx={{ marginLeft: "32px" }}>
        <span className="Footer_get-support">Get Support </span>{" "}
        <span className="Footer_normal-text">Cookies </span>
        <span className="Footer_normal-text">Privacy Policies </span>
        <span className="Footer_normal-text">
          Responsible Disclosure Policy
        </span>
      </Box>
      <Box sx={{ marginRight: "32px" }}>
        {" "}
        <img src={footerIcon} alt="footerIcon" />{" "}
      </Box>
    </Box>
  );
}

export default Footer;
