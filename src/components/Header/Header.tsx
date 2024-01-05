import React from "react";
import { useDispatch, useSelector } from "react-redux";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import { toggleMobileMenuAction } from "../../store/app/slices";
import { IApp } from "../../store/app/types";
import { RootState } from "../../store";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";

import EmojiSpinner from "../EmojiSpinner";

import "./styles.scss";

interface IHeader {
  isMobile: boolean;
}

export const Header: React.FC<IHeader> = ({ isMobile }) => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const isMobileMenuOpen: IApp["isMobileMenuOpen"] = useSelector(
    (state: RootState) => state.app.isMobileMenuOpen
  );

  const handleDrawerOpen = () => {
    dispatch(toggleMobileMenuAction(!isMobileMenuOpen));
  };

  const isMoreSM = width > 480;

  return (
    <AppBar
      className={isMobileMenuOpen ? "header as-mobile-menu" : "header"}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Stack direction="column">
          <Stack direction="row">
            <Typography
              variant={isMobile ? "h6" : "h4"}
              noWrap
              component="div"
              color="gold"
            >
              Welcome to GG store!
            </Typography>
            {isMoreSM && <EmojiSpinner />}
          </Stack>
          <Typography
            variant={isMobile ? "subtitle2" : "subtitle1"}
            noWrap
            component="div"
            color="gold"
          >
            Your the best game provider!
          </Typography>
        </Stack>
      </Toolbar>

      {isMobile && (
        <IconButton
          className="mobile-menu-btn"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{
            ...(isMobileMenuOpen && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
    </AppBar>
  );
};
