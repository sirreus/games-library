import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import { IGame, IGamesStore } from "../../store/games/types";

import GamesLibrary from "../../components/GamesLibrary";
import SortingBar from "../../components/SortingBar";

interface IFavorites {
  isMobile: boolean;
}

export const Favorites: React.FC<IFavorites> = ({ isMobile }) => {
  const favoriteGames: IGamesStore["favorites"] = useSelector(
    (state: RootState) => state.games.favorites
  );

  const sortedGames: IGame[] = useSelector(
    (state: RootState) => state.sorting.data
  );

  return (
    <>
      <SortingBar data={favoriteGames} isMobile={isMobile} />
      <GamesLibrary
        data={sortedGames.length > 0 ? sortedGames : favoriteGames}
        isMobile={isMobile}
      />
      ;
    </>
  );
};
