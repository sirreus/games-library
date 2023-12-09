import React, { useState } from "react";

import {
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const drawerWidth = 240;

export const Sidebar: React.FC = () => {
  const categories = [
    { name: "Slots" },
    { name: "Table Games", subCategories: [{ name: "Roulette" }] },
    {
      name: "Card Games",
      subCategories: [{ name: "Blackjack" }, { name: "Poker" }],
    },
  ];
  const [isCategoriesOpen, setCategoriesOpen] = useState<boolean>(false);
  const [isSubCategoriesOpen, setSubCategoriesOpen] = useState<{
    state: boolean;
    name: string;
  }>({ state: false, name: "" });

  const handleSubcategoriesShow = (name: string) => {
    if (isSubCategoriesOpen.name === name && isSubCategoriesOpen.state) {
      setSubCategoriesOpen({ state: false, name: "" });
    } else if (isSubCategoriesOpen.name !== name && isSubCategoriesOpen.state) {
      setSubCategoriesOpen({ state: true, name });
    } else if (
      isSubCategoriesOpen.name !== name &&
      !isSubCategoriesOpen.state
    ) {
      setSubCategoriesOpen({ state: true, name });
    }
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: "#252b40",
        color: "white",
        "& .MuiPaper-root": {
          backgroundColor: "#252b40",
          color: "white",
        },
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <List>
        <ListItem disablePadding sx={{ cursor: "pointer" }}>
          <ListItemButton>
            <ListItemText primary="All games" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ cursor: "pointer" }}>
          <ListItemButton onClick={() => setCategoriesOpen(!isCategoriesOpen)}>
            <ListItemText primary="Game categories" />
            {isCategoriesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isCategoriesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {categories.map((category, index) => (
              <>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => handleSubcategoriesShow(category.name)}
                  key={index}
                >
                  <ListItemText primary={category.name} />
                  {category.subCategories && (
                    <>
                      {isSubCategoriesOpen.state &&
                      isSubCategoriesOpen.name === category.name ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </>
                  )}
                </ListItemButton>
                {category.subCategories && (
                  <Collapse
                    in={
                      isSubCategoriesOpen.state &&
                      isSubCategoriesOpen.name === category.name
                    }
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" sx={{ pl: 4 }}>
                      {category.subCategories.map((subCategory, index) => (
                        <ListItemButton sx={{ pl: 4 }} key={index}>
                          <ListItemText primary={subCategory.name} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </>
            ))}
          </List>
        </Collapse>

        <ListItem disablePadding sx={{ cursor: "pointer" }}>
          <ListItemButton>
            <ListItemText primary="Favorites" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
