import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import { IGame } from "../../store/games/types";

import GamesLibrary from "../../components/GamesLibrary";
import SortingBar from "../../components/SortingBar";

import gamesData from "../../constants/gamesData";

interface IMainPage {
  isMobile: boolean;
}

export const MainPage: React.FC<IMainPage> = ({ isMobile }) => {
  const sortedGames: IGame[] = useSelector(
    (state: RootState) => state.sorting.data
  );

  return (
    <>
      <SortingBar data={gamesData} isMobile={isMobile} />
      <GamesLibrary
        data={sortedGames.length > 0 ? sortedGames : gamesData}
        isMobile={isMobile}
      />
    </>
  );
};
