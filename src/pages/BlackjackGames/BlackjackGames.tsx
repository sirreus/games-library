import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import { IGame } from "../../store/games/types";

import GameLibrary from "../../components/GameLibrary";
import SortingBar from "../../components/SortingBar";

import gamesData from "../../constants/gamesData";

interface IBlackjackGames {
  isMobile: boolean;
}

export const BlackjackGames: React.FC<IBlackjackGames> = ({ isMobile }) => {
  const blackjackGames = gamesData.filter(
    (game) => game.category === "blackjack"
  );

  const sortedGames: IGame[] = useSelector(
    (state: RootState) => state.sorting.data
  );

  return (
    <>
      <SortingBar data={blackjackGames} isMobile={isMobile} />
      <GameLibrary
        data={sortedGames.length > 0 ? sortedGames : blackjackGames}
        isMobile={isMobile}
      />
    </>
  );
};
