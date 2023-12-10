import React from "react";

import { Chip, Stack } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";

interface IRating {
  rating: number;
}

export const Rating: React.FC<IRating> = ({ rating }) => {
  return (
    <Stack direction="row">
      <Chip
        icon={<GradeIcon color="secondary" sx={{ color: "gold" }} />}
        label={rating}
        variant="outlined"
        sx={{ color: "white" }}
      />
    </Stack>
  );
};
