import { Box } from "@mui/material";
import React from "react";

interface IEmojiIcon {
  symbol?: string;
  label?: string;
  fontSize?: number;
}

export const EmojiIcon: React.FC<IEmojiIcon> = ({
  symbol,
  label,
  fontSize,
}) => (
  <Box
    component="span"
    className="emoji"
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
    sx={{
      fontSize: fontSize ? fontSize : "16px",
    }}
  >
    {symbol}
  </Box>
);
