import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { IGame } from "../../store/games/types";

import { Stack, Toolbar, Typography, Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { setSortedGames } from "../../store/sorting/slices";

type SortingBy = "name" | "rating" | "users" | "";
type SortingOrder = "asc" | "desc";

const SORTING_VARIANTS: SortingBy[] = ["name", "rating", "users"];

interface ISortingBar {
  data: IGame[];
  isMobile: boolean;
}

export const SortingBar: React.FC<ISortingBar> = ({ data, isMobile }) => {
  const dispatch = useDispatch();

  const [sorting, setSorting] = useState<{
    by: SortingBy;
    order: SortingOrder;
  }>({
    by: "",
    order: "asc",
  });

  const sortByName = (a: { name: string }, b: { name: string }) => {
    const isAscending = sorting.order === "asc";
    return isAscending
      ? a.name.localeCompare(b.name)
      : -a.name.localeCompare(b.name);
  };
  const sortByRating = (a: { rating: number }, b: { rating: number }) => {
    const isAscending = sorting.order === "asc";
    return isAscending ? a.rating - b.rating : b.rating - a.rating;
  };
  const sortByUsers = (
    a: { activeUsers: number },
    b: { activeUsers: number }
  ) => {
    const isAscending = sorting.order === "asc";
    return isAscending
      ? a.activeUsers - b.activeUsers
      : b.activeUsers - a.activeUsers;
  };

  const handelSortingData = (sortBy: SortingBy) => {
    setSorting((prev) => ({
      ...prev,
      by: sortBy,
    }));

    let sortByFn;

    switch (sortBy) {
      case "name":
        sortByFn = sortByName;
        break;
      case "rating":
        sortByFn = sortByRating;
        break;
      case "users":
        sortByFn = sortByUsers;
        break;

      default:
        break;
    }

    if (sorting.order === "asc") {
      setSorting((prev) => ({
        ...prev,
        order: "desc",
      }));
    } else {
      setSorting((prev) => ({
        ...prev,
        order: "asc",
      }));
    }

    /**
     * this avoid spontaneous Error
     * Cannot assign to read only property '0' of object '[object Array]'
     * TypeError: Cannot assign to read only property '0' of object '[object Array]'
     */
    const targetData = [...data];

    dispatch(setSortedGames(targetData.sort(sortByFn)));
  };

  return (
    <Stack spacing={1}>
      <Toolbar />
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ marginLeft: isMobile ? "32px !important" : "272px !important" }}
      >
        <Typography>Sort by:</Typography>
        {SORTING_VARIANTS.map((variant: SortingBy) => (
          <Button
            onClick={() => handelSortingData(variant)}
            sx={{ textTransform: "none" }}
            startIcon={
              sorting.by === variant ? (
                sorting.order === "asc" ? (
                  <ArrowDownwardIcon />
                ) : (
                  <ArrowUpwardIcon />
                )
              ) : (
                false
              )
            }
            key={variant}
          >
            {variant}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};
