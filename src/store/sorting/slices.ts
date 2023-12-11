import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GAMES, IGame } from "../games/types";
import { ISortedGames } from "./types";

export const setSortedGamesAction = createAction(
  `${GAMES}/setSortedGames`,
  (data: IGame[]) => ({ payload: data })
);

const gamesInitialState: ISortedGames = {
  data: [],
};

export const sortingSlices = createSlice({
  name: GAMES,
  initialState: gamesInitialState,
  reducers: {
    setSortedGames: (state: ISortedGames, action: PayloadAction<IGame[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setSortedGames } = sortingSlices.actions;

export default sortingSlices.reducer;
