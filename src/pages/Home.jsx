import React from "react";
import { Footer, Header, Rightbar, SideBar } from "../components";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Box sx={{ display: "flex", gap: "0px" }}>
        <SideBar />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
