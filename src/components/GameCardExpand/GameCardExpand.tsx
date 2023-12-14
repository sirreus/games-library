import React from "react";

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
import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./styles.scss";

interface IGameCardExpand {
  open: boolean;
  data: any;
  onClose: () => void;
  isMobile: boolean;
}

export const GameCardExpand: React.FC<IGameCardExpand> = ({
  open,
  data,
  onClose,
  isMobile,
}) => {
  const { width } = useWindowDimensions();

  const { name, image, rating, activeUsers } = data;

  const isLessSM = width < 480;

  return (
    <Dialog open={open} className={isLessSM ? "card-big-mobile" : "card-big"}>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {name}
      </DialogTitle>
      <IconButton
        className="card-big close-btn"
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
