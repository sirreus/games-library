import React from "react";

import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";

export const Sidebar: React.FC = () => {
  return (
    <Box sx={{ width: 250 }}>
      {["Game categories", "Favourites"].map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </Box>
  );
};
