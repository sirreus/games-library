import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import { setSortedGames, setSortedGamesAction } from "./slices";
import { setError } from "../games/slices";
import { IGame } from "../games/types";

function* setSortedGamesSaga(action: PayloadAction<IGame[]>) {
  try {
    yield put(setSortedGames(action.payload));
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

export function* watchSortingGames() {
  yield takeLatest(setSortedGamesAction, setSortedGamesSaga);
}
