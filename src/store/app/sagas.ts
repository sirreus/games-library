import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import { IApp } from "./types";
import { toggleMobileMenu, setAppError } from "./slices";

// Generator function
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

// Generator function
export function* watchApp() {
  yield takeLatest(toggleMobileMenu, toggleMobileMenuSaga);
}
