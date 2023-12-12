import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APP, IApp } from "./types";

export const TOGGLE_MENU_ACTION = `${APP}/toggleMobileMenuAction`;

const appInitialState: IApp = {
  isMobileMenuOpen: false,
  error: "",
};

export const appSlices = createSlice({
  name: APP,
  initialState: appInitialState,
  reducers: {
    toggleMobileMenuAction: (state: IApp, action: PayloadAction<boolean>) => {},
    toggleMobileMenu: (state: IApp, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload;
    },
    setAppError: (state: IApp, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { toggleMobileMenu, toggleMobileMenuAction, setAppError } =
  appSlices.actions;

export default appSlices.reducer;
