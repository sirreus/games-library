import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GAMES, IGame, IGamesStore } from "./types";

export const SET_AS_FAVORITE = `${GAMES}/setFavoriteAction`;
export const REMOVE_FROM_FAVORITE = `${GAMES}/removeFromFavoriteAction`;

const gamesInitialState: IGamesStore = {
  allGames: [],
  favorites: [],
  error: "",
};

export const gamesSlices = createSlice({
  name: GAMES,
  initialState: gamesInitialState,
  reducers: {
    setFavoriteAction(state: IGamesStore, action: PayloadAction<IGame>) {},
    setFavorite(state: IGamesStore, action: PayloadAction<IGame>) {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    },
    removeFromFavoriteAction(
      state: IGamesStore,
      action: PayloadAction<string>
    ) {},
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

export const {
  setFavoriteAction,
  setFavorite,
  removeFromFavoriteAction,
  removeFromFavorite,
  setError,
} = gamesSlices.actions;

export default gamesSlices.reducer;
