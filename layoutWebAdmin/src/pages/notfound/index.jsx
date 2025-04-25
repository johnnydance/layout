import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {  RMenu1 } from "../../routes/pathRoute";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(RMenu1.path); // Điều hướng về trang chủ
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "#f7f8fa",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "96px", fontWeight: "bold", color: "#3f51b5" }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 2, color: "#555" }}>
        Oops! The page you're looking for isn't here.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "#777" }}>
        You may have mistyped the address or the page may have moved.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
        sx={{
          textTransform: "none",
          fontSize: "16px",
          px: 4,
          py: 1,
          bgcolor: "#3f51b5",
          ":hover": {
            bgcolor: "#2c387e",
          },
        }}
      >
        Go to Homepage
      </Button>
    </Box>
  );
};

export default PageNotFound;
