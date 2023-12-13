import React from "react";

import { ListItem, ListItemButton, ListItemText } from "@mui/material";

interface IMenuItemBasic {
  text: string;
  onClick: () => void;
  isSelected: boolean;
  isNested?: boolean;
}

export const MenuItemBasic: React.FC<IMenuItemBasic> = ({
  text,
  onClick,
  isSelected,
  isNested,
}) => {
  return (
    <ListItem
      disablePadding
      sx={{
        pl: isNested ? 4 : 0,
        color: isSelected ? "gold" : "white",
        cursor: "pointer",
        "&:hover": { color: "gold" },
      }}
    >
      <ListItemButton onClick={() => onClick()}>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};
