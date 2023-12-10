import React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Sidebar from "../../components/Sidebar";
import GamesLibrary from "../../components/GamesLibrary";
import Header from "../../components/Header";
import { useMobile } from "../../hooks/useMobile";

export const MainPage: React.FC = () => {
  const isMobile = useMobile();
  return (
    <>
      {/* <Container component="main" sx={{ display: "flex" }}> */}
      <CssBaseline />
      <Header isMobile={isMobile} />
      <Sidebar isMobile={isMobile} />
      <GamesLibrary isMobile={isMobile} />
      {/* </Container> */}
    </>
  );
};
