import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { useMobile } from "./hooks/useMobile";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainPage from "./pages/MainPage";
import Favorites from "./pages/Favorites";

import { CssBaseline } from "@mui/material";

import "./App.scss";
import SlotsGames from "./pages/SlotsGames";
import RouletteGames from "./pages/RouletteGames";
import BlackjackGames from "./pages/BlackjackGames";
import PokerGames from "./pages/PokerGames";

function App() {
  const isMobile = useMobile();

  return (
    <BrowserRouter>
      <CssBaseline />
      <Header isMobile={isMobile} />
      <Sidebar isMobile={isMobile} />

      <Routes>
        <Route path="/" element={<MainPage isMobile={isMobile} />} />
        <Route path="/favorites" element={<Favorites isMobile={isMobile} />} />
        <Route path="/slots" element={<SlotsGames isMobile={isMobile} />} />
        <Route
          path="/table-games/roulette"
          element={<RouletteGames isMobile={isMobile} />}
        />
        <Route
          path="/card-games/blackjack"
          element={<BlackjackGames isMobile={isMobile} />}
        />
        <Route
          path="/card-games/poker"
          element={<PokerGames isMobile={isMobile} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
