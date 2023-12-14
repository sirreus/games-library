import React from "react";

import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IApp } from "../../store/app/types";

import "../MenuItemBasic/styles.scss";

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
  const isMobileMenuOpen: IApp["isMobileMenuOpen"] = useSelector(
    (state: RootState) => state.app.isMobileMenuOpen
  );

  return (
    <ListItem
      disablePadding
      className={isMobileMenuOpen ? "menu-item mobile" : "menu-item"}
      sx={{
        pl: isNested ? 4 : 0,
      }}
    >
      <ListItemButton onClick={() => onClick()}>
        <ListItemText primary={text} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
    </ListItem>
  );
};
