import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IGame, IGamesStore } from "../../store/games/types";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GradeIcon from "@mui/icons-material/Grade";
import PersonIcon from "@mui/icons-material/Person";

import "./styles.scss";

interface IGameCard {
  data: IGame;
  onSelect: (index: number) => void;
  setFavorite: (index: number) => void;
}

export const GameCard: React.FC<IGameCard> = ({
  data,
  onSelect,
  setFavorite,
}) => {
  const { width } = useWindowDimensions();
  const { id, name, image, rating, activeUsers } = data;

  const favoriteGames: IGamesStore["favorites"] = useSelector(
    (state: RootState) => state.games.favorites
  );

  const isFavorite = favoriteGames.find((game) => game.name === name);

  const isLessSM = width < 480;

  return (
    <Card
      onClick={() => onSelect(id)}
      className="card"
      sx={{
        maxWidth: isLessSM ? "100%" : 345,
      }}
    >
      <CardMedia
        component="img"
        className="card-img"
        image={image}
        alt={name}
      />
      <CardContent
        sx={{
          minHeight: isLessSM ? "fit-content" : "216px",
          color: "white",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>

        <List>
          <ListItem disablePadding>
            <GradeIcon sx={{ color: "gold" }} />
            <ListItemText
              primary={rating || "0.0"}
              sx={{ marginLeft: "8px" }}
            />
          </ListItem>
          <ListItem disablePadding>
            <PersonIcon color="success" />
            <ListItemText
              primary={activeUsers || "0"}
              sx={{ marginLeft: "8px" }}
            />
          </ListItem>
        </List>
      </CardContent>

      <CardActions
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Button
          size="small"
          onClick={() => onSelect(id)}
          sx={{ color: "wheat" }}
        >
          Learn More
        </Button>
        <IconButton
          aria-label="add to favorites"
          onClick={() => setFavorite(id)}
        >
          {isFavorite ? (
            <FavoriteIcon sx={{ color: "firebrick" }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: "firebrick" }} />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};
