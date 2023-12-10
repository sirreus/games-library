import React, { useState } from "react";

import { Drawer, SwipeableDrawer, Toolbar } from "@mui/material";
import Menu from "../Menu";

const drawerWidth = 240;

interface ISidebar {
  isMobile: boolean;
}

export const Sidebar: React.FC<ISidebar> = ({ isMobile }) => {
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
      open={true}
      onClose={() => {}}
      onOpen={() => {}}
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
