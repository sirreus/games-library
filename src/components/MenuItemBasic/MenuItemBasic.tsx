import React from "react";

import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IApp } from "../../store/app/types";

import "./styles.scss";

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
  const isMobileMenuOpen: IApp["isMobileMenuOpen"] = useSelector(
    (state: RootState) => state.app.isMobileMenuOpen
  );

  return (
    <ListItem
      disablePadding
      className={isMobileMenuOpen ? "menu-item mobile" : "menu-item"}
      sx={{
        pl: isNested ? 4 : 0,
        color: isSelected ? "gold" : "white",
      }}
    >
      <ListItemButton onClick={() => onClick()}>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};
