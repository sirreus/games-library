import React from "react";

import GamesLibrary from "../../components/GamesLibrary";
import gamesData from "../../constants/gamesData";

interface IBlackjackGames {
  isMobile: boolean;
}

export const BlackjackGames: React.FC<IBlackjackGames> = ({ isMobile }) => {
  const blackjackGames = gamesData.filter(
    (game) => game.category === "blackjack"
  );
  return (
    <>
      <GamesLibrary data={blackjackGames} isMobile={isMobile} />
    </>
  );
};
