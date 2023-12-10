import React from "react";

import GamesLibrary from "../../components/GamesLibrary";
import gamesData from "../../constants/gamesData";

interface IPokerGames {
  isMobile: boolean;
}

export const PokerGames: React.FC<IPokerGames> = ({ isMobile }) => {
  const pokerGames = gamesData.filter((game) => game.category === "poker");
  return (
    <>
      <GamesLibrary data={pokerGames} isMobile={isMobile} />
    </>
  );
};
