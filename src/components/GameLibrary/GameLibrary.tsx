import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import {
  setFavoriteAction,
  removeFromFavoriteAction,
} from "../../store/games/slices";
import { IGame, IGamesStore } from "../../store/games/types";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import { Box, Grid } from "@mui/material";

import GameCard from "../GameCard";
import GameCardPopup from "../GameCardPopup";

import gamesData from "../../constants/gamesData";

import "./styles.scss";

interface IGameLibrary {
  data: IGame[];
  isMobile: boolean;
}

export const GameLibrary: React.FC<IGameLibrary> = ({ data, isMobile }) => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const favoriteGames: IGamesStore["favorites"] = useSelector(
    (state: RootState) => state.games.favorites
  );

  const [open, setOpen] = useState<boolean>(false);
  const [showGame, setShowGame] = useState<any>({});

  const handleShowModalDialog = ({
    id,
    state,
  }: {
    id?: number;
    state: boolean;
  }) => {
    setOpen(state);
    if (id) {
      const game: IGame = gamesData.find((game) => game.id === id)!;
      setShowGame(game);
    } else {
      setShowGame({});
    }
  };

  const handelSetFavorites = (id: number) => {
    const selectedGame: IGame = gamesData.find((game) => game.id === id)!;

    const isFavorite = favoriteGames.find(
      (game) => game.name === selectedGame.name
    );
    if (isFavorite) {
      dispatch(removeFromFavoriteAction(selectedGame.name));
    } else {
      dispatch(setFavoriteAction(selectedGame));
    }
  };

  const isLessSM = width < 480;

  return (
    <Box
      component="div"
      className="library-wrapper"
      sx={{
        marginLeft: isMobile ? 0 : "240px",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: isLessSM ? 2 : 4, sm: 8, md: 12, lg: 16 }}
      >
        {data.map((game: IGame, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <GameCard
              data={game}
              onSelect={() =>
                handleShowModalDialog({ id: game.id, state: true })
              }
              setFavorite={() => handelSetFavorites(game.id)}
            />
          </Grid>
        ))}
      </Grid>

      <GameCardPopup
        open={open}
        data={showGame}
        onClose={() => handleShowModalDialog({ state: false })}
        isMobile={isMobile}
      />
    </Box>
  );
};
