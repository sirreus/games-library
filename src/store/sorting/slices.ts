import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GAMES, IGame } from "../games/types";
import { ISortedGames } from "./types";

export const SORTING_GAMES_ACTION = `${GAMES}/setSortedGamesAction`;

const gamesInitialState: ISortedGames = {
  data: [],
};

export const sortingSlices = createSlice({
  name: GAMES,
  initialState: gamesInitialState,
  reducers: {
    setSortedGamesAction: (
      state: ISortedGames,
      action: PayloadAction<IGame[]>
    ) => {},
    setSortedGames: (state: ISortedGames, action: PayloadAction<IGame[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setSortedGames, setSortedGamesAction } = sortingSlices.actions;

export default sortingSlices.reducer;
