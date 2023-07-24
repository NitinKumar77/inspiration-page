import React from "react";
import copyLinkIcon from "../../icons/Icon.svg";
import documentIcon from "../../icons/document.svg";
import likeIcon from "../../icons/Thumbs-up.svg";
import {
  Box,
  Divider,
  IconButton,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import {
  leftTableCell,
  linkButtonStyle,
  linkTextStyle,
  rightTableCell,
  subtitleStyle,
  tableRowStyle,
  titleStyle,
} from "../style";
function Description() {
  return (
    <Box
      sx={{ padding: "72px 138px ", background: "var(--neutral-n-0, #FFF)" }}
    >
      <Box marginBottom={"72px"}>
        {/* Title */}
        <Typography sx={titleStyle}>
          ProductLaunch2021_EN_Cold_320x350.jpg
        </Typography>

        {/* Generali italia */}
        <Typography sx={subtitleStyle}>Generali italia</Typography>

        {/* Link and icons */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                color: "var(--neutral-n-700, #60607D)",

                /* Body/Body-Normal-1 */
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontHeight: "400",
                lineHeight: "22px",
              }}
            >
              https://sampleurl.com/media/q55lej1b99mjn ... mot3yhr
            </Typography>
            <IconButton sx={{ padding: "15px" }} color="primary">
              <img src={copyLinkIcon} alt="icon" />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <IconButton sx={linkButtonStyle}>
              <img src={documentIcon} alt="icon" />
              <Typography sx={linkTextStyle}>
                Open in Content Symphony
              </Typography>
            </IconButton>
            <IconButton sx={linkButtonStyle}>
              <img src={likeIcon} alt="icon" />
              <Typography sx={linkTextStyle}>Like 122</Typography>
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Divider />

      {/* Asset details */}
      <Box
        marginTop={"72px"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "48px",
          alignSelf: "stretch",
        }}
      >
        <Typography sx={titleStyle}>Asset details</Typography>

        {/* Table */}
        <TableContainer
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "24px",
            alignSelf: "stretch",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              flex: "1 0 0",
            }}
          >
            <TableRow sx={tableRowStyle}>
              <TableCell sx={leftTableCell}>Creator</TableCell>
              <TableCell sx={rightTableCell}>Isobar Budapest</TableCell>
            </TableRow>
            <TableRow sx={tableRowStyle}>
              <TableCell sx={leftTableCell}>Campaign</TableCell>
              <TableCell sx={rightTableCell}>Campaign Name</TableCell>
            </TableRow>
            <TableRow sx={tableRowStyle}>
              <TableCell sx={leftTableCell}>Market</TableCell>
              <TableCell sx={rightTableCell}>Italy</TableCell>
            </TableRow>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              flex: "1 0 0",
            }}
          >
            <TableRow sx={tableRowStyle}>
              <TableCell sx={leftTableCell}>Year</TableCell>
              <TableCell sx={rightTableCell}>9th October 2020</TableCell>
            </TableRow>
            <TableRow sx={tableRowStyle}>
              <TableCell sx={leftTableCell}>Media Type</TableCell>
              <TableCell sx={rightTableCell}>Video(mp4)</TableCell>
            </TableRow>
            <TableRow sx={tableRowStyle}>
              <TableCell sx={leftTableCell}>Language</TableCell>
              <TableCell sx={rightTableCell}>Italian</TableCell>
            </TableRow>
          </Box>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Description;
