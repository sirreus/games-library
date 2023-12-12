import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import { IApp } from "./types";
import { toggleMobileMenu, TOGGLE_MENU_ACTION, setAppError } from "./slices";

function* toggleMobileMenuSaga(
  action: PayloadAction<IApp["isMobileMenuOpen"]>
) {
  try {
    yield put(toggleMobileMenu(action.payload));
  } catch (error: any) {
    yield put(
      setAppError(
        `Error: ${
          error.response ? error.response.data?.message || error : error
        }`
      )
    );
  }
}

export function* watchApp() {
  yield takeLatest(TOGGLE_MENU_ACTION, toggleMobileMenuSaga);
}
