import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import { IGame } from "../../store/games/types";

import GameLibrary from "../../components/GameLibrary";
import SortingBar from "../../components/SortingBar";

import gamesData from "../../constants/gamesData";

interface IRouletteGames {
  isMobile: boolean;
}

export const RouletteGames: React.FC<IRouletteGames> = ({ isMobile }) => {
  const rouletteGames = gamesData.filter(
    (game) => game.category === "roulette"
  );

  const sortedGames: IGame[] = useSelector(
    (state: RootState) => state.sorting.data
  );

  return (
    <>
      <SortingBar data={rouletteGames} isMobile={isMobile} />
      <GameLibrary
        data={sortedGames.length > 0 ? sortedGames : rouletteGames}
        isMobile={isMobile}
      />
    </>
  );
};
