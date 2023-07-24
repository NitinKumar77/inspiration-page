import React from "react";
import { Box, Typography } from "@mui/material";

const CommentSection = ({ author, date, content }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "10px",
        alignSelf: "stretch",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          alignSelf: "stretch",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flex: "1 0 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "var(--neutral-n-1000, #05051E)",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "22px",
                }}
              >
                {author}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  paddingTop: "2px",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: "var(--neutral-n-700, #60607D)",
                    fontFamily: "Inter",
                    fontSize: "12px",
                    fontStyle: "italic",
                    fontWeight: 400,
                    lineHeight: "16px",
                  }}
                >
                  {date}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flex: "100" }}>
        <Typography
          sx={{
            color: "var(--neutral-n-1000, #05051E)",
            fontFamily: "Inter",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "16px",
          }}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default CommentSection;
