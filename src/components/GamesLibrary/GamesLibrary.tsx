import React, { useState } from "react";

import { Box, Grid, Toolbar } from "@mui/material";

import gamesData from "../../constants/gamesData";
import GameCard from "../GameCard";
import GameCardExpand from "../GameCardExpand";

interface IGamesLibrary {
  isMobile: boolean;
}

export const GamesLibrary: React.FC<IGamesLibrary> = ({ isMobile }) => {
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
    if (index) {
      setShowGame(gamesData[index]);
    } else {
      setShowGame({});
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
                setFavorite={() => {}}
              />
            </Grid>
          ))}
        </Grid>

        <GameCardExpand
          open={open}
          data={showGame}
          onClose={() => handleShowModalDialog({ state: false })}
        />
      </div>
    </Box>
  );
};
