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

/**
 * Maps nft keys (first 2 numbers from tokenId) to nft info
 */
export const BLAST_OFF_COLLECTION: PokemoonNft[] = [
  {
    tokenId: "11",
    imageUrl: "001meownautC.png",
    card: BLAST_OFF_CARDS[1],
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "31",
    imageUrl: "001meownautUC.png",
    card: BLAST_OFF_CARDS[1],
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "54",
    imageUrl: "001meownautR.png",
    card: BLAST_OFF_CARDS[1],
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "60",
    imageUrl: "001meownautL.png",
    card: BLAST_OFF_CARDS[1],
    rarity: PM_RARITY.L,
  },
  {
    tokenId: "21",
    imageUrl: "002pikapuffC.png",
    card: BLAST_OFF_CARDS[2],
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "33",
    imageUrl: "002pikapuffUC.png",
    card: BLAST_OFF_CARDS[2],
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "53",
    imageUrl: "002pikapuffR.png",
    card: BLAST_OFF_CARDS[2],
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "25",
    imageUrl: "003pikapuffC.png",
    card: BLAST_OFF_CARDS[3],
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "39",
    imageUrl: "003pikapuffUC.png",
    card: BLAST_OFF_CARDS[3],
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "41",
    imageUrl: "003pikapuffR.png",
    card: BLAST_OFF_CARDS[3],
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "61",
    imageUrl: "003pikapuffL.png",
    card: BLAST_OFF_CARDS[3],
    rarity: PM_RARITY.L,
  },
  {
    tokenId: "16",
    imageUrl: "004rattishC.png",
    card: BLAST_OFF_CARDS[4],
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "27",
    imageUrl: "004rattishUC.png",
    card: BLAST_OFF_CARDS[4],
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "47",
    imageUrl: "004rattishR.png",
    card: BLAST_OFF_CARDS[4],
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "22",
    imageUrl: "005squirderC.png",
    card: BLAST_OFF_CARDS[5],
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "38",
    imageUrl: "005squirderUC.png",
    card: BLAST_OFF_CARDS[5],
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "46",
    imageUrl: "005squirderR.png",
    card: BLAST_OFF_CARDS[5],
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "24",
    imageUrl: "006chartortleC.png",
    card: BLAST_OFF_CARDS[6],
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "30",
    imageUrl: "006chartortleUC.png",
    card: BLAST_OFF_CARDS[6],
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "51",
    imageUrl: "006chartortleR.png",
    card: BLAST_OFF_CARDS[6],
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "14",
    imageUrl: "007blastardC.png",
    card: BLAST_OFF_CARDS[7],
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "35",
    imageUrl: "007blastardUC.png",
    card: BLAST_OFF_CARDS[7],
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "49",
    imageUrl: "007blastardR.png",
    card: BLAST_OFF_CARDS[7],
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "23",
    imageUrl: "008blastardC.png",
    card: BLAST_OFF_CARDS[8],
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "40",
    imageUrl: "008blastardUC.png",
    card: BLAST_OFF_CARDS[8],
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "55",
    imageUrl: "008blastardR.png",
    card: BLAST_OFF_CARDS[8],
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "58",
    imageUrl: "008blastardL.png",
    card: BLAST_OFF_CARDS[8],
    rarity: PM_RARITY.L,
  },
  {
    tokenId: "15",
    imageUrl: "009kadalaxC.png",
    card: BLAST_OFF_CARDS[9],
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "34",
    imageUrl: "009kadalaxUC.png",
    card: BLAST_OFF_CARDS[9],
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "48",
    imageUrl: "009kadalaxR.png",
    card: BLAST_OFF_CARDS[9],
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "12",
    imageUrl: "010kadalaxslimC.png",
    card: BLAST_OFF_CARDS[10],
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "37",
    imageUrl: "010kadalaxslimUC.png",
    card: BLAST_OFF_CARDS[10],
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "45",
    imageUrl: "010kadalaxslimR.png",
    card: BLAST_OFF_CARDS[10],
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "18",
    imageUrl: "011zapduckC.png",
    card: BLAST_OFF_CARDS[11],
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "28",
    imageUrl: "011zapduckUC.png",
    card: BLAST_OFF_CARDS[11],
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "44",
    imageUrl: "011zapduckR.png",
    card: BLAST_OFF_CARDS[11],
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "57",
    imageUrl: "011zapduckL.png",
    card: BLAST_OFF_CARDS[11],
    rarity: PM_RARITY.L,
  },
  {
    tokenId: "17",
    imageUrl: "012goldenkobanC.png",
    card: BLAST_OFF_CARDS[12],
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "36",
    imageUrl: "012goldenkobanUC.png",
    card: BLAST_OFF_CARDS[12],
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "50",
    imageUrl: "012goldenkobanR.png",
    card: BLAST_OFF_CARDS[12],
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "20",
    imageUrl: "013goldenkobanC.png",
    card: BLAST_OFF_CARDS[13],
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "32",
    imageUrl: "013goldenkobanUC.png",
    card: BLAST_OFF_CARDS[13],
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "42",
    imageUrl: "013goldenkobanR.png",
    card: BLAST_OFF_CARDS[13],
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "19",
    imageUrl: "014changeteamsC.png",
    card: BLAST_OFF_CARDS[14],
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "29",
    imageUrl: "014changeteamsUC.png",
    card: BLAST_OFF_CARDS[14],
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "52",
    imageUrl: "014changeteamsR.png",
    card: BLAST_OFF_CARDS[14],
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "59",
    imageUrl: "014changeteamsL.png",
    card: BLAST_OFF_CARDS[14],
    rarity: PM_RARITY.L,
  },
  {
    tokenId: "13",
    imageUrl: "015rashscratchumC.png",
    card: BLAST_OFF_CARDS[15],
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "26",
    imageUrl: "015rashscratchumUC.png",
    card: BLAST_OFF_CARDS[15],
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "43",
    imageUrl: "015rashscratchumR.png",
    card: BLAST_OFF_CARDS[15],
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "56",
    imageUrl: "015rashscratchumL.png",
    card: BLAST_OFF_CARDS[15],
    rarity: PM_RARITY.L,
  },
  {
    tokenId: "62",
    imageUrl: "016babymeownautML.png",
    card: BLAST_OFF_CARDS[16],
    rarity: PM_RARITY.M,
  },
];
