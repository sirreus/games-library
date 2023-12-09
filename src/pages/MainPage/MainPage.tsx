import React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Sidebar from "../../components/Sidebar";
import GamesLibrary from "../../components/GamesLibrary";
import Header from "../../components/Header";

export const MainPage: React.FC = () => {
  return (
    <>
      {/* <Container component="main" sx={{ display: "flex" }}> */}
      <CssBaseline />
      <Header />
      <Sidebar />
      <GamesLibrary />
      {/* </Container> */}
    </>
  );
};
