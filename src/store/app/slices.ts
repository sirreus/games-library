import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APP, IApp } from "./types";

export const toggleMobileMenuAction = createAction(
  `${APP}/toggleMobileMenu`,
  (isMobileMenuOpen: boolean) => ({ payload: { isMobileMenuOpen } })
);

const appInitialState: IApp = {
  isMobileMenuOpen: false,
  error: "",
};

export const appSlices = createSlice({
  name: APP,
  initialState: appInitialState,
  reducers: {
    toggleMobileMenu: (state: IApp, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload;
    },
    setAppError: (state: IApp, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { toggleMobileMenu, setAppError } = appSlices.actions;

export default appSlices.reducer;
