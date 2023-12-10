import React from "react";

import GamesLibrary from "../../components/GamesLibrary";
import gamesData from "../../constants/gamesData";

interface ISlotsGames {
  isMobile: boolean;
}

export const SlotsGames: React.FC<ISlotsGames> = ({ isMobile }) => {
  const slotsGames = gamesData.filter((game) => game.category === "slots");
  return (
    <>
      <GamesLibrary data={slotsGames} isMobile={isMobile} />
    </>
  );
};
