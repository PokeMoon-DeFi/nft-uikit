import { PM_RARITY, PM_TYPES } from "../constants/nfts";
import Theme from "../theme";

export const getRarityGradient = (rarity: string) => {
  let startColor: string;
  let endColor: string;
  switch (rarity) {
    case PM_RARITY.C:
      startColor = Theme.rarity.common;
      endColor = Theme.rarity.common;
      break;
    case PM_RARITY.U:
      startColor = Theme.rarity.uncommon;
      endColor = Theme.rarity.uncommon;
      break;
    case PM_RARITY.R:
      startColor = Theme.rarity.rare;
      endColor = Theme.rarity.rare;
      break;
    case PM_RARITY.L:
      startColor = Theme.rarity.legendary.light;
      endColor = Theme.rarity.legendary.dark;
      break;
    case PM_RARITY.M:
      startColor = Theme.rarity.moonlike.light;
      endColor = Theme.rarity.moonlike.dark;
      break;
    default:
      throw new Error("Invalid Rarity");
  }
  const gradientString = `linear-gradient(120deg, ${startColor} 0%, ${endColor} 47%, #111111 47.3%, #111111 100%)`;
  return gradientString;
};

export const getTypeColor = (type: string) => {
  let color: string;
  switch (type) {
    case PM_TYPES.ITEM:
      color = Theme.types.item;
      break;
    case PM_TYPES.SUPPORTER:
      color = Theme.types.supporter;
      break;
    case PM_TYPES.PSYCHIC:
      color = Theme.types.psychic;
      break;
    case PM_TYPES.LIGHTNING:
      color = Theme.types.lightning;
      break;
    case PM_TYPES.FIRE:
      color = Theme.types.fire;
      break;
    case PM_TYPES.GRASS:
      color = Theme.types.grass;
      break;
    case PM_TYPES.WATER:
      color = Theme.types.water;
      break;
    case PM_TYPES.FIGHTING:
      color = Theme.types.fighting;
      break;
    case PM_TYPES.COLORLESS:
      color = Theme.types.colorless;
      break;
    case PM_TYPES.DARKNESS:
      color = Theme.types.darkness;
      break;
    case PM_TYPES.DRAGON:
      color = Theme.types.dragon;
      break;
    case PM_TYPES.FAIRY:
      color = Theme.types.fairy;
      break;
    case PM_TYPES.METAL:
      color = Theme.types.metal;
      break;
    default:
      color = "#ffffff";
      break;
  }
  return color;
};
