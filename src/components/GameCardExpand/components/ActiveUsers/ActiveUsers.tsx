import React from "react";

import { Chip, Stack } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

interface IActiveUsers {
  amount: number;
}

export const ActiveUsers: React.FC<IActiveUsers> = ({ amount }) => {
  return (
    <Stack direction="row">
      <Chip
        icon={<PersonIcon color="success" />}
        label={amount}
        variant="outlined"
        sx={{ color: "white" }}
      />
    </Stack>
  );
};
