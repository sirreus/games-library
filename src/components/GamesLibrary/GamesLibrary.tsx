import React from "react";
import { Grid } from "@mui/material";
import gamesData from "../../constants/gamesData";
import GameCard from "../GameCard";

export const GamesLibrary: React.FC = () => {
  return (
    <div
      className="games-library"
      style={{ padding: "32px", width: "fit-content" }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {gamesData.map((game: any, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <GameCard index={index} data={game} onSelect={() => {}} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
