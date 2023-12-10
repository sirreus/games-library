import React from "react";

import GamesLibrary from "../../components/GamesLibrary";
import gamesData from "../../constants/gamesData";

interface IRouletteGames {
  isMobile: boolean;
}

export const RouletteGames: React.FC<IRouletteGames> = ({ isMobile }) => {
  const rouletteGames = gamesData.filter(
    (game) => game.category === "roulette"
  );
  return (
    <>
      <GamesLibrary data={rouletteGames} isMobile={isMobile} />
    </>
  );
};
