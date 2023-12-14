import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IApp } from "../../store/app/types";
import { RootState } from "../../store";
import { toggleMobileMenuAction } from "../../store/app/slices";

import { Drawer, SwipeableDrawer, Toolbar } from "@mui/material";

import Menu from "../Menu";

import "./styles.scss";

interface ISidebar {
  isMobile: boolean;
}

export const Sidebar: React.FC<ISidebar> = ({ isMobile }) => {
  const dispatch = useDispatch();
  const isMobileMenuOpen: IApp["isMobileMenuOpen"] = useSelector(
    (state: RootState) => state.app.isMobileMenuOpen
  );

  const handleDrawerOpen = (state: boolean) => {
    dispatch(toggleMobileMenuAction(state));
  };

  return !isMobile ? (
    <Drawer
      variant="permanent"
      className="desktop-drawer"
      sx={{
        display: isMobile ? "none" : "block",
      }}
    >
      <Toolbar />
      <Menu />
    </Drawer>
  ) : (
    <SwipeableDrawer
      anchor="right"
      className="mobile-drawer"
      open={isMobileMenuOpen}
      onClose={() => handleDrawerOpen(false)}
      onOpen={() => handleDrawerOpen(true)}
    >
      <Toolbar />
      <Menu />
    </SwipeableDrawer>
  );
};
