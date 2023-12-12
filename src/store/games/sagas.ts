import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import {
  setFavorite,
  SET_AS_FAVORITE,
  removeFromFavorite,
  REMOVE_FROM_FAVORITE,
  setError,
} from "./slices";
import { IGame } from "./types";

function* setFavoriteSaga(action: PayloadAction<IGame>) {
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
  yield takeLatest(SET_AS_FAVORITE, setFavoriteSaga);
  yield takeLatest(REMOVE_FROM_FAVORITE, removeFromFavoriteSaga);
}
