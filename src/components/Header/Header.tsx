import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  toggleMobileMenuAction,
  toggleMobileMenu,
} from "../../store/app/slices";
import { IApp } from "../../store/app/types";
import { RootState } from "../../store";

interface IHeader {
  isMobile: boolean;
}

export const Header: React.FC<IHeader> = ({ isMobile }) => {
  const dispatch = useDispatch();

  const isMobileMenuOpen: IApp["isMobileMenuOpen"] = useSelector(
    (state: RootState) => state.app.isMobileMenuOpen
  );

  const handleDrawerOpen = () => {
    dispatch(toggleMobileMenu(!isMobileMenuOpen));
  };

  console.log(isMobileMenuOpen);

  return (
    <AppBar
      position="fixed"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#252b40",
        color: "white",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Welcome to Games Global store!
        </Typography>
      </Toolbar>

      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{
            ...(isMobileMenuOpen && { display: "none" }),
            marginRight: "32px",
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
    </AppBar>
  );
};
