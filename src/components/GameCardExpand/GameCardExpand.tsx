import React from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IGameCardExpand {
  open: boolean;
  data: any;
  onClose: () => void;
}

export const GameCardExpand: React.FC<IGameCardExpand> = ({
  open,
  data,
  onClose,
}) => {
  const { name, image, rating, activeUsers } = data;

  return (
    <Dialog
      open={open}
      sx={{
        "& .MuiDialog-container > .MuiPaper-root": {
          backgroundColor: "#252b40",
          color: "white",
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {name}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={() => onClose()}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Typography>
      </DialogContent>
    </Dialog>
  );
};
