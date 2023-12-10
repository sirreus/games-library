import React from "react";

import { Drawer, SwipeableDrawer, Toolbar } from "@mui/material";
import Menu from "../Menu";
import { useSelector } from "react-redux";
import { IApp } from "../../store/app/types";
import { RootState } from "../../store";
import { useDispatch } from "react-redux";
import { toggleMobileMenu } from "../../store/app/slices";

const drawerWidth = 240;

interface ISidebar {
  isMobile: boolean;
}

export const Sidebar: React.FC<ISidebar> = ({ isMobile }) => {
  const dispatch = useDispatch();
  const isMobileMenuOpen: IApp["isMobileMenuOpen"] = useSelector(
    (state: RootState) => state.app.isMobileMenuOpen
  );

  const handleDrawerOpen = (state: boolean) => {
    dispatch(toggleMobileMenu(state));
  };

  return !isMobile ? (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        display: isMobile ? "none" : "block",
        backgroundColor: "#252b40",
        color: "white",
        "& .MuiPaper-root": {
          backgroundColor: "#252b40",
          color: "white",
        },
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Menu />
    </Drawer>
  ) : (
    <SwipeableDrawer
      anchor="right"
      open={isMobileMenuOpen}
      onClose={() => handleDrawerOpen(false)}
      onOpen={() => handleDrawerOpen(true)}
      sx={{
        "& .MuiPaper-root": {
          width: drawerWidth,
          backgroundColor: "#252b40",
          color: "white",
        },
      }}
    >
      <Toolbar />
      <Menu />
    </SwipeableDrawer>
  );
};
