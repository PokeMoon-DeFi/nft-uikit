export * from "./types";

export const PM_TYPES = {
  ITEM: "Item",
  SUPPORTER: "Supporter",
  GRASS: "Grass",
  FIRE: "Fire",
  WATER: "Water",
  LIGHTNING: "Lightning",
  PSYCHIC: "Psychic",
  FIGHTING: "Fighting",
  DARKNESS: "Darkness",
  METAL: "Metal",
  DRAGON: "Dragon",
  FAIRY: "Fairy",
  COLORLESS: "Colorless",
};

export enum RARITIES {
  COMMON = "Common",
  UNCOMMON = "Uncommon",
  RARE = "Rare",
  LEGENDARY = "Legendary",
  MOONLIKE = "Moonlike",
}
export const PM_RARITY = {
  C: RARITIES.COMMON,
  U: RARITIES.UNCOMMON,
  R: RARITIES.RARE,
  L: RARITIES.LEGENDARY,
  M: RARITIES.MOONLIKE,
};
