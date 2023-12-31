import React from "react";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Rating from "./components/Rating";
import ActiveUsers from "./components/ActiveUsers";

import "./styles.scss";

interface IGameCardPopup {
  open: boolean;
  data: any;
  onClose: () => void;
  isMobile: boolean;
}

export const GameCardPopup: React.FC<IGameCardPopup> = ({
  open,
  data,
  onClose,
  isMobile,
}) => {
  const { width } = useWindowDimensions();

  const { name, image, rating, activeUsers } = data;

  const isLessSM = width < 480;

  return (
    <Dialog
      open={open}
      className={isLessSM ? "card-popup-mobile" : "card-popup"}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>{name}</DialogTitle>
      <IconButton
        className="card-popup close-btn"
        aria-label="close"
        onClick={() => onClose()}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Stack direction={isMobile ? "column-reverse" : "row"} spacing={2}>
          <Typography gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Typography>
          <Stack direction="column" spacing={2}>
            <Box
              component="img"
              className={isMobile ? "game-props-mobile" : "game-props"}
              src={image}
              alt={name}
            />
            <Stack direction="row" spacing={2}>
              <Rating rating={rating || 0.0} />
              <ActiveUsers amount={activeUsers || 0} />
            </Stack>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
