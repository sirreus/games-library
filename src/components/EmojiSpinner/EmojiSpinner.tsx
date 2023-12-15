import React, { useEffect, useState } from "react";

import { Box } from "@mui/system";

import EmojiIcon from "../EmojiIcon";

import "./styles.scss";

interface IItem {
  label: string;
  symbol: string;
}

const items: IItem[] = [
  {
    label: "luck",
    symbol: "🍀",
  },
  {
    label: "unicorn",
    symbol: "🦄",
  },
  {
    label: "flash",
    symbol: "⚡️",
  },
  {
    label: "bag",
    symbol: "💰",
  },
  {
    label: "diamond",
    symbol: "💎",
  },
  {
    label: "stars",
    symbol: "✨",
  },
];

export const EmojiSpinner: React.FC = () => {
  const loading = true;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedItem, setDisplayedItem] = useState<IItem>(
    items[currentIndex]
  );

  useEffect(() => {
    while (loading) {
      const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % items.length;
        setCurrentIndex(nextIndex);
        setDisplayedItem(items[nextIndex]);
      }, 800);

      return () => clearInterval(interval);
    }
  }, [loading, currentIndex]);
  return (
    <Box component="div" className="emoji-spinner">
      <EmojiIcon
        label={displayedItem.label}
        symbol={displayedItem.symbol}
        fontSize={24}
      />
    </Box>
  );
};
