import React from "react";

import GamesLibrary from "../../components/GamesLibrary";
import gamesData from "../../constants/gamesData";
import SortingBar from "../../components/SortingBar";
import { IGame } from "../../store/games/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface ISlotsGames {
  isMobile: boolean;
}

export const SlotsGames: React.FC<ISlotsGames> = ({ isMobile }) => {
  const slotsGames = gamesData.filter((game) => game.category === "slots");

  const sortedGames: IGame[] = useSelector(
    (state: RootState) => state.sorting.data
  );

  return (
    <>
      <SortingBar data={slotsGames} isMobile={isMobile} />
      <GamesLibrary
        data={sortedGames.length > 0 ? sortedGames : slotsGames}
        isMobile={isMobile}
      />
    </>
  );
};
