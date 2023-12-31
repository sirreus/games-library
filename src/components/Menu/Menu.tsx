import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { setSortedGames } from "../../store/sorting/slices";

import { List, Collapse } from "@mui/material";

import MenuItemBasic from "../MenuItemBasic";
import MenuItemCollapsed from "../MenuItemCollapsed";
import routes from "../../constants/routes";

export const Menu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

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

  const goToSubCategoryGamePage = (category: string, subCategory: string) => {
    const formateCategory = category.replace(" ", "-").toLowerCase();
    const formateSubCategory = subCategory.toLowerCase();
    navigate(`${routes.home}/${formateCategory}/${formateSubCategory}`);

    dispatch(setSortedGames([]));
  };

  const goTo = (path: string) => {
    navigate(path);
    dispatch(setSortedGames([]));
  };

  return (
    <List>
      <MenuItemBasic
        text="Home"
        isSelected={location.pathname === routes.home}
        onClick={() => goTo(routes.home)}
      />
      <MenuItemCollapsed
        text="Game categories"
        isOpen={isCategoriesOpen}
        onClick={() => setCategoriesOpen(!isCategoriesOpen)}
      />
      {/* GAME CATEGORIES */}
      <Collapse in={isCategoriesOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              {!category.subCategories ? (
                <MenuItemBasic
                  text={category.name}
                  isSelected={
                    location.pathname ===
                    `${routes.home}/${category.name.toLowerCase()}`
                  }
                  onClick={() =>
                    goTo(`${routes.home}/${category.name.toLowerCase()}`)
                  }
                  isNested
                  key={index}
                />
              ) : (
                <React.Fragment key={index}>
                  <MenuItemCollapsed
                    text={category.name}
                    isOpen={
                      isSubCategoriesOpen.state &&
                      isSubCategoriesOpen.name === category.name
                    }
                    onClick={() => handleSubcategoriesShow(category.name)}
                    isNested
                  />
                  {/* GAME SUBCATEGORIES */}
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
                        <MenuItemBasic
                          isSelected={location.pathname.includes(
                            subCategory.name.toLowerCase()
                          )}
                          text={subCategory.name}
                          isNested
                          onClick={() =>
                            goToSubCategoryGamePage(
                              category.name,
                              subCategory.name
                            )
                          }
                          key={index}
                        />
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
        </List>
      </Collapse>

      <MenuItemBasic
        isSelected={location.pathname === routes.favorites}
        text="Favorites"
        onClick={() => goTo(routes.favorites)}
      />
    </List>
  );
};
