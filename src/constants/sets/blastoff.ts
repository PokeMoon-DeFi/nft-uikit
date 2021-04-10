import { ARTISTS, CARDS_SETS, POKEMOON_TYPES } from "../nftData";
import { PokemoonCard, PokemoonNft } from "../types";

export const BLAST_OFF_CARD_INFO: PokemoonCard[] = [
  {
    number: 1,
    name: "Meownaut",
    type: POKEMOON_TYPES.PSYCHIC,
    set: CARDS_SETS[2114],
    description:
      "Legend says that the bioluminescent coin in a Meownaut's chest is the source of its resilience and good fortune.",
    artist: ARTISTS.Armilo,
  },
  {
    number: 2,
    name: "Pikapuff",
    type: POKEMOON_TYPES.LIGHTNING,
    set: CARDS_SETS[2114],
    description: "That's gonna be a hit.",
    artist: ARTISTS.LilyPonto,
  },
  {
    number: 3,
    name: "Pikapuff",
    type: POKEMOON_TYPES.LIGHTNING,
    set: CARDS_SETS[2114],
    description:
      "I woke up under the table with a splitting headache, smoke coming out of my ears... and an unconquerable urge to buy a ticket to her next show.",
    artist: ARTISTS.LilyPonto,
  },
  {
    number: 4,
    name: "Rattish",
    type: "Grass",
    set: CARDS_SETS[2114],
    description:
      "There are rodents who can cook, and those who teach Kung Fu. But some of them just wish to sit and contemplate the view.",
    artist: ARTISTS.Ilya,
  },
  {
    number: 5,
    name: "Squirder",
    type: POKEMOON_TYPES.FIRE,
    set: CARDS_SETS[2114],
    description: "Favorite start Pokemoon of the nicotine addicted trainer.",
    artist: ARTISTS.Armilo,
  },
  {
    number: 6,
    name: "Chartortle",
    type: POKEMOON_TYPES.FIRE,
    set: CARDS_SETS[2114],
    description:
      "Chartortles are known to reheat banana and anchovy pizza with the flame from their firey tails.",
    artist: ARTISTS.Armilo,
  },
  {
    number: 7,
    name: "Blastard",
    type: POKEMOON_TYPES.FIRE,
    set: CARDS_SETS[2114],
    description: "Need a light?",
    artist: ARTISTS.Armilo,
  },
  {
    number: 8,
    name: "Blastard",
    type: POKEMOON_TYPES.FIRE,
    set: CARDS_SETS[2114],
    description: "All Gas, Some brakes.",
    artist: ARTISTS.LilyPonto,
  },
  {
    number: 9,
    name: "Kadalax",
    type: POKEMOON_TYPES.PSYCHIC,
    set: CARDS_SETS[2114],
    description:
      "Contrary to popular belief, it's not alway pleasant getting big spooned.",
    artist: ARTISTS.Ilya,
  },
  {
    number: 10,
    name: "Kadalax Slim",
    type: POKEMOON_TYPES.PSYCHIC,
    set: CARDS_SETS[2114],
    description:
      "Some Kadalax, having conquered their material vices, are able to sustain themselves off air and thought alone.",
    artist: ARTISTS.Ilya,
  },
  {
    number: 11,
    name: "Zapduck",
    type: POKEMOON_TYPES.LIGHTNING,
    set: CARDS_SETS[2114],
    description: "Strike one, you're out.",
    artist: ARTISTS.Morlux,
  },
  {
    number: 12,
    name: "Golden Koban",
    type: POKEMOON_TYPES.ITEM,
    set: CARDS_SETS[2114],
    description: "",
    artist: ARTISTS.LilyPonto,
  },
  {
    number: 13,
    name: "Golden Koban",
    type: POKEMOON_TYPES.ITEM,
    set: CARDS_SETS[2114],
    description: "",
    artist: ARTISTS.LilyPonto,
  },
  {
    number: 14,
    name: "Change Teams",
    type: POKEMOON_TYPES.SUPPORTER,
    set: CARDS_SETS[2114],
    description: "",
    artist: ARTISTS.NinjaGuy,
  },
  {
    number: 15,
    name: "Rash Scratchum",
    type: POKEMOON_TYPES.SUPPORTER,
    set: CARDS_SETS[2114],
    description: "",
    artist: ARTISTS.NinjaGuy,
  },
  {
    number: 16,
    name: "Baby Meownaut",
    type: POKEMOON_TYPES.PSYCHIC,
    set: CARDS_SETS[2114],
    description: "It's too adorable for words",
    artist: ARTISTS.Mathijs,
  },
];

export const NFT_LIST: PokemoonNft[] = [
  {
    tokenId: "100001",
    imageUrl: "001meownautC.png",
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 1),
    rarity: "C",
  },
];
