import React from "react";
import { PM_RARITY, PM_TYPES } from "../constants/nfts";
import { MaterialTheme } from "../theme";

export const getRarityGradient = (rarity: string) => {
  let startColor: any;
  let endColor: any;
  switch (rarity) {
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
      // case PM_RARITY.L:
      //   startColor = MaterialTheme.palette.rarity.legendary.light;
      //   endColor = MaterialTheme.palette.rarity.legendary.dark;
      //   break;
      // case PM_RARITY.M:
      //   startColor = MaterialTheme.palette.rarity.moonlike.light;
      //   endColor = MaterialTheme.palette.rarity.moonlike.dark;
      break;
    default:
      throw new Error("Invalid Rarity");
  }
  const gradientString = `linear-gradient(120deg, ${startColor} 0%, ${endColor} 47%, #111111 47.3%, #111111 100%)`;
  return gradientString;
};

export const getTypeColor = (type: string) => {
  let color: React.CSSProperties["color"];
  return "white";
  // switch (type) {
  //   case PM_TYPES.ITEM:
  //     color = MaterialTheme.palette.types.item.bgColor;
  //     break;
  //   case PM_TYPES.SUPPORTER:
  //     color = PokemoonTheme.types.supporter.bgColor;
  //     break;
  //   case PM_TYPES.PSYCHIC:
  //     color = PokemoonTheme.types.psychic.bgColor;
  //     break;
  //   case PM_TYPES.LIGHTNING:
  //     color = PokemoonTheme.types.lightning.bgColor;
  //     break;
  //   case PM_TYPES.FIRE:
  //     color = PokemoonTheme.types.fire.bgColor;
  //     break;
  //   case PM_TYPES.GRASS:
  //     color = PokemoonTheme.types.grass.bgColor;
  //     break;
  //   case PM_TYPES.WATER:
  //     color = PokemoonTheme.types.water.bgColor;
  //     break;
  //   case PM_TYPES.FIGHTING:
  //     color = PokemoonTheme.types.fighting.bgColor;
  //     break;
  //   case PM_TYPES.COLORLESS:
  //     color = PokemoonTheme.types.colorless.bgColor;
  //     break;
  //   case PM_TYPES.DARKNESS:
  //     color = PokemoonTheme.types.darkness.bgColor;
  //     break;
  //   case PM_TYPES.DRAGON:
  //     color = PokemoonTheme.types.dragon.bgColor;
  //     break;
  //   case PM_TYPES.FAIRY:
  //     color = PokemoonTheme.types.fairy.bgColor;
  //     break;
  //   case PM_TYPES.METAL:
  //     color = PokemoonTheme.types.metal.bgColor;
  //     break;
  //   default:
  //     color = "#ffffff";
  //     break;
  // }
  // return color;
};
