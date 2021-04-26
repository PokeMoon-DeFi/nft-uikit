import React from "react";
import { PM_RARITY } from "../constants/nfts";
import { MaterialTheme } from "../theme";

export const getRarityGradient = (rarity: string) => {
  let startColor: any;
  let endColor: any;
  switch (rarity) {
    default:
    case PM_RARITY.C:
      startColor = MaterialTheme.palette.rarity.common;
      endColor = MaterialTheme.palette.rarity.common;
      break;
    case PM_RARITY.U:
      startColor = MaterialTheme.palette.rarity.uncommon;
      endColor = MaterialTheme.palette.rarity.uncommon;
      break;
    case PM_RARITY.R:
      startColor = MaterialTheme.palette.rarity.rare;
      endColor = MaterialTheme.palette.rarity.rare;
      break;
  }
  const gradientString = `linear-gradient(120deg, ${startColor} 0%, ${endColor} 47%, #111111 47.3%, #111111 100%)`;
  return gradientString;
};
