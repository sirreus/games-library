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
import { IGamesStore } from "../../store/games/types";

interface IGameCard {
  index: number;
  data: any;
  onSelect: (index: number) => void;
  setFavorite: (index: number) => void;
}

export const GameCard: React.FC<IGameCard> = ({
  index,
  data,
  onSelect,
  setFavorite,
}) => {
  const { name, image, rating, activeUsers } = data;

  const favoriteGames: IGamesStore["favorites"] = useSelector(
    (state: RootState) => state.games.favorites
  );

  const isFavorite = favoriteGames.find((game) => game.data.name === name);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={name} height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {rating || "0.0"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {activeUsers || "0"}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="small" onClick={() => onSelect(index)}>
          Learn More
        </Button>
        <IconButton
          aria-label="add to favorites"
          onClick={() => setFavorite(index)}
        >
          {isFavorite ? (
            <FavoriteIcon sx={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};
