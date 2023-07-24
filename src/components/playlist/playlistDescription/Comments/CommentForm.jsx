import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const CommentForm = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        gap: "12px",
        alignSelf: "stretch",
      }}
    >
      <Typography
        sx={{
          alignSelf: "stretch",
          color: "var(--neutral-n-1000, #05051E)",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "22px",
        }}
      >
        Write your comment
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "24px",
          alignSelf: "stretch",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            height: "92px",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <TextField
            multiline
            maxRows={2}
            fullWidth
            placeholder="Placeholder"
            variant="outlined"
            sx={{
              display: " flex",
              padding: "11px 16px",
              alignItems: "flex-start",
              gap: " 12px",
              flex: "1 0 0",
              alignSelf: " stretch",
              borderRadius: "8px",
              background: "var(--neutral-n-100, #EEEEF1)",
              "& .MuiInputBase-root": {
                padding: "0px",
                color: "var(--neutral-n-700, #60607D)",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "22px",
              },
            }}
          ></TextField>
          <Typography
            alignSelf={"stretch"}
            sx={{
              color: "var(--neutral-n-700, #60607D)",
              textAlign: "right",
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "18px",
              marginTop: "8px",
            }}
          >
            0/1000
          </Typography>
        </Box>
      </Box>
      <Button
        variant="outlined"
        sx={{
          borderRadius: "4px",
          color: "var(--blue-b-550, #0660C8)",
          textAlign: "center",
          fontFamily: "Inter",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "16px",
          textTransform: "none",
          border: "3px solid #0660C8",
          "&:hover": {
            border: "3px solid #0660C8",
          },
        }}
      >
        Post Comment
      </Button>
    </Box>
  );
};

export default CommentForm;
