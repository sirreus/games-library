import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IGame, IGamesStore } from "../../store/games/types";

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
  const { id, name, image, rating, activeUsers } = data;

  const favoriteGames: IGamesStore["favorites"] = useSelector(
    (state: RootState) => state.games.favorites
  );

  const isFavorite = favoriteGames.find((game) => game.name === name);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={name} height="140" image={image} />
      <CardContent sx={{ backgroundColor: "#252b40", color: "white" }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">{rating || "0.0"}</Typography>
        <Typography variant="body2">{activeUsers || "0"}</Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "space-between",
          backgroundColor: "#252b40",
          color: "white",
        }}
      >
        <Button size="small" onClick={() => onSelect(id)}>
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
