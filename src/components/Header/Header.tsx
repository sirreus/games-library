import React, { useState } from "react";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface IHeader {
  isMobile: boolean;
}

export const Header: React.FC<IHeader> = ({ isMobile }) => {
  const [open, setMobileDrawerOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setMobileDrawerOpen(!open);
  };
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
          sx={{ ...(open && { display: "none" }), marginRight: "32px" }}
        >
          <MenuIcon />
        </IconButton>
      )}
    </AppBar>
  );
};
