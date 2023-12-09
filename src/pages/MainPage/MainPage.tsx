import React from "react";

import { Container } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import GamesLibrary from "../../components/GamesLibrary";

export const MainPage: React.FC = () => {
  return (
    <Container component="main" sx={{ display: "flex" }}>
      <Sidebar />
      <GamesLibrary />
    </Container>
  );
};
