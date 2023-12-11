import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import { IGame } from "../../store/games/types";

import GamesLibrary from "../../components/GamesLibrary";
import SortingBar from "../../components/SortingBar";

import gamesData from "../../constants/gamesData";

interface IPokerGames {
  isMobile: boolean;
}

export const PokerGames: React.FC<IPokerGames> = ({ isMobile }) => {
  const pokerGames = gamesData.filter((game) => game.category === "poker");

  const sortedGames: IGame[] = useSelector(
    (state: RootState) => state.sorting.data
  );

  return (
    <>
      <SortingBar data={pokerGames} isMobile={isMobile} />
      <GamesLibrary
        data={sortedGames.length > 0 ? sortedGames : pokerGames}
        isMobile={isMobile}
      />
    </>
  );
};
