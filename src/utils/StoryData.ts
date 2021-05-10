import {
  ArtistInfo,
  PM_RARITY,
  PM_TYPES,
  PokemoonCard,
  PokemoonNft,
} from "../constants";

export const ARTISTS: { [key: string]: ArtistInfo } = {
  Armilo: {
    name: "Armilo Barrios",
  },
  LilyPonto: {
    name: "Lily&Ponto",
    instagram: "@lilloworks",
  },
  Ilya: {
    name: "Ilya",
    instagram: "@ilyaspb2019",
  },
  Morlux: {
    name: "Morlux",
    instagram: "@morlux_artista",
  },
  NinjaGuy: {
    name: "NinjaGuy",
  },
  Mathijs: {
    name: "Mathijs",
    instagram: "@mathijs_cheese",
  },
};

export const BLAST_OFF_CARDS: PokemoonCard[] = [
  {
    number: 1,
    name: "Meownaut",
    type: PM_TYPES.PSYCHIC,
    description:
      "Legend says that the bioluminescent coin in a Meownaut's chest is the source of its resilience and good fortune.",
    artist: ARTISTS.Armilo,
  },
  {
    number: 2,
    name: "Pikapuff",
    type: PM_TYPES.LIGHTNING,
    description: "That's gonna be a hit.",
    artist: ARTISTS.LilyPonto,
  },
  {
    number: 3,
    name: "Pikapuff",
    type: PM_TYPES.LIGHTNING,
    description:
      "I woke up under the table with a splitting headache, smoke coming out of my ears... and an unconquerable urge to buy a ticket to her next show.",
    artist: ARTISTS.LilyPonto,
  },
  {
    number: 4,
    name: "Rattish",
    type: PM_TYPES.GRASS,
    description:
      "There are rodents who can cook, and those who teach Kung Fu. But some of them just wish to sit and contemplate the view.",
    artist: ARTISTS.Ilya,
  },
  {
    number: 5,
    name: "Squirder",
    type: PM_TYPES.FIRE,
    description: "Favorite start Pokemoon of the nicotine addicted trainer.",
    artist: ARTISTS.Armilo,
  },
  {
    number: 6,
    name: "Chartortle",
    type: PM_TYPES.FIRE,
    description:
      "Chartortles are known to reheat banana and anchovy pizza with the flame from their firey tails.",
    artist: ARTISTS.Armilo,
  },
  {
    number: 7,
    name: "Blastard",
    type: PM_TYPES.FIRE,
    description: "Need a light?",
    artist: ARTISTS.Armilo,
  },
  {
    number: 8,
    name: "Blastard",
    type: PM_TYPES.FIRE,
    description: "All Gas, Some brakes.",
    artist: ARTISTS.LilyPonto,
  },
  {
    number: 9,
    name: "Kadalax",
    type: PM_TYPES.PSYCHIC,
    description:
      "Contrary to popular belief, it's not alway pleasant getting big spooned.",
    artist: ARTISTS.Ilya,
  },
  {
    number: 10,
    name: "Kadalax Slim",
    type: PM_TYPES.PSYCHIC,
    description:
      "Some Kadalax, having conquered their material vices, are able to sustain themselves off air and thought alone.",
    artist: ARTISTS.Ilya,
  },
  {
    number: 11,
    name: "Zapduck",
    type: PM_TYPES.LIGHTNING,
    description: "Strike one, you're out.",
    artist: ARTISTS.Morlux,
  },
  {
    number: 12,
    name: "Golden Koban",
    type: PM_TYPES.ITEM,
    description: "",
    artist: ARTISTS.LilyPonto,
  },
  {
    number: 13,
    name: "Golden Koban",
    type: PM_TYPES.ITEM,
    description: "",
    artist: ARTISTS.LilyPonto,
  },
  {
    number: 14,
    name: "Change Teams",
    type: PM_TYPES.SUPPORTER,
    description: "",
    artist: ARTISTS.NinjaGuy,
  },
  {
    number: 15,
    name: "Rash Scratchum",
    type: PM_TYPES.SUPPORTER,
    description: "",
    artist: ARTISTS.NinjaGuy,
  },
  {
    number: 16,
    name: "Baby Meownaut",
    type: PM_TYPES.PSYCHIC,
    description: "It's too adorable for words.",
    artist: ARTISTS.Mathijs,
  },
];
