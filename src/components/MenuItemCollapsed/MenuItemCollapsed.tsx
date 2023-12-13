import React from "react";

import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface IMenuItemCollapsed {
  text: string;
  isOpen: boolean;
  onClick: () => void;
  isNested?: boolean;
}

export const MenuItemCollapsed: React.FC<IMenuItemCollapsed> = ({
  text,
  isOpen,
  onClick,
  isNested,
}) => {
  return (
    <ListItem
      disablePadding
      sx={{
        pl: isNested ? 4 : 0,
        cursor: "pointer",
        "&:hover": { color: "gold" },
      }}
    >
      <ListItemButton onClick={() => onClick()}>
        <ListItemText primary={text} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
    </ListItem>
  );
};
