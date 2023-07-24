import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import CommentSection from "./CommentSection";
import CommentForm from "./CommentForm";
import { commentsSections } from "../style";

function Comments() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "72px 138px 120px 138px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "48px",
        alignSelf: "stretch",
        backgroundColor: "#F7F7F8",
      }}
    >
      <Typography
        sx={{
          flex: "1 0 0",
          color: "var(--neutral-n-1000, #05051E)",
          fontFamily: "Inter",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "32px",
        }}
      >
        Comments (3)
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "72px",
        }}
      >
        <CommentForm />
        <Divider sx={{ width: "100%" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "36px",
            alignSelf: "stretch",
          }}
        >
          <Box sx={commentsSections}>
            <CommentSection
              author="Nurul Alam"
              date="15 days ago"
              content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            />
          </Box>
          <Box sx={commentsSections}>
            <CommentSection
              author="Persephone Philip"
              date="2 months ago"
              content="nice! love the colors"
            />
          </Box>
          <Box sx={commentsSections}>
            <CommentSection
              author="Brayden Justice"
              date="1 month ago"
              content="So nice!"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Comments;
