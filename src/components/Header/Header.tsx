import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { toggleMobileMenuAction } from "../../store/app/slices";
import { IApp } from "../../store/app/types";
import { RootState } from "../../store";

import "./styles.scss";

interface IHeader {
  isMobile: boolean;
}

export const Header: React.FC<IHeader> = ({ isMobile }) => {
  const dispatch = useDispatch();

  const isMobileMenuOpen: IApp["isMobileMenuOpen"] = useSelector(
    (state: RootState) => state.app.isMobileMenuOpen
  );

  const handleDrawerOpen = () => {
    dispatch(toggleMobileMenuAction(!isMobileMenuOpen));
  };

  return (
    <AppBar
      className={isMobileMenuOpen ? "header as-mobile-menu" : "header"}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" color="gold">
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
