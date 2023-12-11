import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import { IGamesStore } from "../../store/games/types";
import GamesLibrary from "../../components/GamesLibrary";
import { Toolbar } from "@mui/material";

interface IFavorites {
  isMobile: boolean;
}

export const Favorites: React.FC<IFavorites> = ({ isMobile }) => {
  const favoriteGames: IGamesStore["favorites"] = useSelector(
    (state: RootState) => state.games.favorites
  );
  return (
    <>
      <Toolbar />
      <GamesLibrary data={favoriteGames} isMobile={isMobile} />;
    </>
  );
};
