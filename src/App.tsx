import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { useMobile } from "./hooks/useMobile";

import SlotsGames from "./pages/SlotsGames";
import RouletteGames from "./pages/RouletteGames";
import BlackjackGames from "./pages/BlackjackGames";
import PokerGames from "./pages/PokerGames";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainPage from "./pages/MainPage";
import Favorites from "./pages/Favorites";

import { CssBaseline } from "@mui/material";

import routes from "./constants/routes";

import "./App.scss";

function App() {
  const isMobile = useMobile();

  return (
    <BrowserRouter>
      <CssBaseline />
      <Header isMobile={isMobile} />
      <Sidebar isMobile={isMobile} />

      <Routes>
        <Route
          path={"/" || "/games-library"}
          element={<Navigate to={routes.home} />}
        />
        <Route path={routes.home} element={<MainPage isMobile={isMobile} />} />
        <Route
          path={routes.favorites}
          element={<Favorites isMobile={isMobile} />}
        />
        <Route
          path={routes.slotsGames}
          element={<SlotsGames isMobile={isMobile} />}
        />
        <Route
          path={routes.rouletteGames}
          element={<RouletteGames isMobile={isMobile} />}
        />
        <Route
          path={routes.blackjackGames}
          element={<BlackjackGames isMobile={isMobile} />}
        />
        <Route
          path={routes.pokerGames}
          element={<PokerGames isMobile={isMobile} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
