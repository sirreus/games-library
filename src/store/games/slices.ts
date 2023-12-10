import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GAMES, IGame, IGamesStore } from "./types";

export const setFavoriteAction = createAction(
  `${GAMES}/setFavorite`,
  (data: IGame) => ({ payload: data })
);

export const removeFromFavoriteAction = createAction(
  `${GAMES}/removeFromFavorite`,
  (name: string) => ({ payload: name })
);

const gamesInitialState: IGamesStore = {
  allGames: [],
  favorites: [],
  error: "",
};

export const gamesSlices = createSlice({
  name: GAMES,
  initialState: gamesInitialState,
  reducers: {
    setFavorite(state: IGamesStore, action: PayloadAction<IGame>) {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    },
    removeFromFavorite(state: IGamesStore, action: PayloadAction<string>) {
      return {
        ...state,
        favorites: state.favorites.filter(
          (game) => game.name !== action.payload
        ),
      };
    },

    setError: (state: IGamesStore, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setFavorite, removeFromFavorite, setError } =
  gamesSlices.actions;

export default gamesSlices.reducer;
