import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setFavorite, removeFromFavorite } from "../../store/games/slices";
import { IGame, IGamesStore } from "../../store/games/types";

import { Box, Grid, Toolbar } from "@mui/material";

import gamesData from "../../constants/gamesData";
import GameCard from "../GameCard";
import GameCardExpand from "../GameCardExpand";
import { RootState } from "../../store";

interface IGamesLibrary {
  isMobile: boolean;
}

export const GamesLibrary: React.FC<IGamesLibrary> = ({ isMobile }) => {
  const dispatch = useDispatch();

  const favoriteGames: IGamesStore["favorites"] = useSelector(
    (state: RootState) => state.games.favorites
  );

  const [open, setOpen] = useState<boolean>(false);
  const [showGame, setShowGame] = useState<any>({});

  const handleShowModalDialog = ({
    index,
    state,
  }: {
    index?: number;
    state: boolean;
  }) => {
    setOpen(state);
    if (index || index === 0) {
      setShowGame(gamesData[index]);
    } else {
      setShowGame({});
    }
  };

  const handelSetFavorites = (index: number) => {
    const selectedGame: IGame = {
      name: gamesData[index].name,
      category: gamesData[index].category,
      rating: 0.0,
      activeUsers: 0,
      image: "",
    };

    const isFavorite = favoriteGames.find(
      (game) => game.data.name === selectedGame.name
    );
    if (isFavorite) {
      dispatch(removeFromFavorite(selectedGame.name));
    } else {
      dispatch(
        setFavorite({
          data: selectedGame,
          isFavorite: true,
        })
      );
    }
  };

  return (
    <Box sx={{ marginLeft: isMobile ? 0 : "240px" }}>
      <Toolbar />
      <div
        className="games-library"
        style={{ padding: "32px", width: "fit-content" }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
        >
          {gamesData.map((game: any, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <GameCard
                index={index}
                data={game}
                onSelect={() => handleShowModalDialog({ index, state: true })}
                setFavorite={() => handelSetFavorites(index)}
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
      </div>
    </Box>
  );
};
