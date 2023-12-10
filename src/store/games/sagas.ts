import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import {
  setFavorite,
  setFavoriteAction,
  removeFromFavorite,
  removeFromFavoriteAction,
  setError,
} from "./slices";
import { IGameData } from "./types";

function* setFavoriteSaga(action: PayloadAction<IGameData>) {
  try {
    yield put(setFavorite(action.payload));
  } catch (error: any) {
    yield put(
      setError(
        `Error: ${
          error.response ? error.response.data?.message || error : error
        }`
      )
    );
  }
}

function* removeFromFavoriteSaga(action: PayloadAction<string>) {
  try {
    yield put(removeFromFavorite(action.payload));
  } catch (error: any) {
    yield put(
      setError(
        `Error: ${
          error.response ? error.response.data?.message || error : error
        }`
      )
    );
  }
}

export function* watchGames() {
  yield takeLatest(setFavoriteAction, setFavoriteSaga);
  yield takeLatest(removeFromFavoriteAction, removeFromFavoriteSaga);
}
