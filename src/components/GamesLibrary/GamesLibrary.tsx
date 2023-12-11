import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import { setFavorite, removeFromFavorite } from "../../store/games/slices";
import { IGame, IGamesStore } from "../../store/games/types";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import { Box, Grid } from "@mui/material";

import GameCard from "../GameCard";
import GameCardExpand from "../GameCardExpand";

import gamesData from "../../constants/gamesData";

interface IGamesLibrary {
  data: IGame[];
  isMobile: boolean;
}

export const GamesLibrary: React.FC<IGamesLibrary> = ({ data, isMobile }) => {
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
      dispatch(removeFromFavorite(selectedGame.name));
    } else {
      dispatch(setFavorite(selectedGame));
    }
  };

  const isLessSM = width < 480;

  return (
    <Box
      sx={{
        padding: { xs: "16px", sm: "32px" },
        marginLeft: isMobile ? 0 : "240px",
        width: "fit-content",
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

      <GameCardExpand
        open={open}
        data={showGame}
        onClose={() => handleShowModalDialog({ state: false })}
        isMobile={isMobile}
      />
    </Box>
  );
};
