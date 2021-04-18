import { ArtistInfo, PM_TYPES, PM_RARITY, PokemoonNft } from "../../constants";

const ARTISTS: { [key: string]: ArtistInfo } = {
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

const BLAST_OFF_COLLECTION: PokemoonNft[] = [
  {
    tokenId: "11000000",
    imageUrl: "001meownautC.png",
    card: {
      number: 1,
      name: "Meownaut",
      type: PM_TYPES.PSYCHIC,
      description:
        "Legend says that the bioluminescent coin in a Meownaut's chest is the source of its resilience and good fortune.",
      artist: ARTISTS.Armilo,
    },
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "12000000",
    imageUrl: "001meownautUC.png",
    card: {
      number: 1,
      name: "Meownaut",
      type: PM_TYPES.PSYCHIC,
      description:
        "Legend says that the bioluminescent coin in a Meownaut's chest is the source of its resilience and good fortune.",
      artist: ARTISTS.Armilo,
    },
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "13000000",
    imageUrl: "001meownautR.png",
    card: {
      number: 1,
      name: "Meownaut",
      type: PM_TYPES.PSYCHIC,
      description:
        "Legend says that the bioluminescent coin in a Meownaut's chest is the source of its resilience and good fortune.",
      artist: ARTISTS.Armilo,
    },
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "14000000",
    imageUrl: "001meownautL.png",
    card: {
      number: 1,
      name: "Meownaut",
      type: PM_TYPES.PSYCHIC,
      description:
        "Legend says that the bioluminescent coin in a Meownaut's chest is the source of its resilience and good fortune.",
      artist: ARTISTS.Armilo,
    },
    rarity: PM_RARITY.L,
  },
  {
    tokenId: "15000000",
    imageUrl: "002pikapuffC.png",
    card: {
      number: 2,
      name: "Pikapuff",
      type: PM_TYPES.LIGHTNING,
      description: "That's gonna be a hit.",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "16000000",
    imageUrl: "002pikapuffUC.png",
    card: {
      number: 2,
      name: "Pikapuff",
      type: PM_TYPES.LIGHTNING,
      description: "That's gonna be a hit.",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "17000000",
    imageUrl: "002pikapuffR.png",
    card: {
      number: 2,
      name: "Pikapuff",
      type: PM_TYPES.LIGHTNING,
      description: "That's gonna be a hit.",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "18000000",
    imageUrl: "003pikapuffC.png",
    card: {
      number: 3,
      name: "Pikapuff",
      type: PM_TYPES.LIGHTNING,
      description:
        "I woke up under the table with a splitting headache, smoke coming out of my ears... and an unconquerable urge to buy a ticket to her next show.",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "19000000",
    imageUrl: "003pikapuffUC.png",
    card: {
      number: 3,
      name: "Pikapuff",
      type: PM_TYPES.LIGHTNING,
      description:
        "I woke up under the table with a splitting headache, smoke coming out of my ears... and an unconquerable urge to buy a ticket to her next show.",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "20000000",
    imageUrl: "003pikapuffR.png",
    card: {
      number: 3,
      name: "Pikapuff",
      type: PM_TYPES.LIGHTNING,
      description:
        "I woke up under the table with a splitting headache, smoke coming out of my ears... and an unconquerable urge to buy a ticket to her next show.",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "21000000",
    imageUrl: "003pikapuffL.png",
    card: {
      number: 3,
      name: "Pikapuff",
      type: PM_TYPES.LIGHTNING,
      description:
        "I woke up under the table with a splitting headache, smoke coming out of my ears... and an unconquerable urge to buy a ticket to her next show.",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.L,
  },
  {
    tokenId: "22000000",
    imageUrl: "004rattishC.png",
    card: {
      number: 4,
      name: "Rattish",
      type: PM_TYPES.GRASS,
      description:
        "There are rodents who can cook, and those who teach Kung Fu. But some of them just wish to sit and contemplate the view.",
      artist: ARTISTS.Ilya,
    },
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "23000000",
    imageUrl: "004rattishUC.png",
    card: {
      number: 4,
      name: "Rattish",
      type: PM_TYPES.GRASS,
      description:
        "There are rodents who can cook, and those who teach Kung Fu. But some of them just wish to sit and contemplate the view.",
      artist: ARTISTS.Ilya,
    },
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "24000000",
    imageUrl: "004rattishR.png",
    card: {
      number: 4,
      name: "Rattish",
      type: PM_TYPES.GRASS,
      description:
        "There are rodents who can cook, and those who teach Kung Fu. But some of them just wish to sit and contemplate the view.",
      artist: ARTISTS.Ilya,
    },
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "25000000",
    imageUrl: "005squirderC.png",
    card: {
      number: 5,
      name: "Squirder",
      type: PM_TYPES.FIRE,
      description: "Favorite start Pokemoon of the nicotine addicted trainer.",
      artist: ARTISTS.Armilo,
    },
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "26000000",
    imageUrl: "005squirderUC.png",
    card: {
      number: 5,
      name: "Squirder",
      type: PM_TYPES.FIRE,
      description: "Favorite start Pokemoon of the nicotine addicted trainer.",
      artist: ARTISTS.Armilo,
    },
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "27000000",
    imageUrl: "005squirderR.png",
    card: {
      number: 5,
      name: "Squirder",
      type: PM_TYPES.FIRE,
      description: "Favorite start Pokemoon of the nicotine addicted trainer.",
      artist: ARTISTS.Armilo,
    },
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "28000000",
    imageUrl: "006chartortleC.png",
    card: {
      number: 6,
      name: "Chartortle",
      type: PM_TYPES.FIRE,
      description:
        "Chartortles are known to reheat banana and anchovy pizza with the flame from their firey tails.",
      artist: ARTISTS.Armilo,
    },
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "29000000",
    imageUrl: "006chartortleUC.png",
    card: {
      number: 6,
      name: "Chartortle",
      type: PM_TYPES.FIRE,
      description:
        "Chartortles are known to reheat banana and anchovy pizza with the flame from their firey tails.",
      artist: ARTISTS.Armilo,
    },
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "30000000",
    imageUrl: "006chartortleR.png",
    card: {
      number: 6,
      name: "Chartortle",
      type: PM_TYPES.FIRE,
      description:
        "Chartortles are known to reheat banana and anchovy pizza with the flame from their firey tails.",
      artist: ARTISTS.Armilo,
    },
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "31000000",
    imageUrl: "007blastardC.png",
    card: {
      number: 7,
      name: "Blastard",
      type: PM_TYPES.FIRE,
      description: "Need a light?",
      artist: ARTISTS.Armilo,
    },
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "32000000",
    imageUrl: "007blastardUC.png",
    card: {
      number: 7,
      name: "Blastard",
      type: PM_TYPES.FIRE,
      description: "Need a light?",
      artist: ARTISTS.Armilo,
    },
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "33000000",
    imageUrl: "007blastardR.png",
    card: {
      number: 7,
      name: "Blastard",
      type: PM_TYPES.FIRE,
      description: "Need a light?",
      artist: ARTISTS.Armilo,
    },
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "34000000",
    imageUrl: "008blastardC.png",
    card: {
      number: 8,
      name: "Blastard",
      type: PM_TYPES.FIRE,
      description: "All Gas, Some brakes.",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "35000000",
    imageUrl: "008blastardUC.png",
    card: {
      number: 8,
      name: "Blastard",
      type: PM_TYPES.FIRE,
      description: "All Gas, Some brakes.",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "36000000",
    imageUrl: "008blastardR.png",
    card: {
      number: 8,
      name: "Blastard",
      type: PM_TYPES.FIRE,
      description: "All Gas, Some brakes.",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "37000000",
    imageUrl: "008blastardL.png",
    card: {
      number: 8,
      name: "Blastard",
      type: PM_TYPES.FIRE,
      description: "All Gas, Some brakes.",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.L,
  },
  {
    tokenId: "38000000",
    imageUrl: "009kadalaxC.png",
    card: {
      number: 9,
      name: "Kadalax",
      type: PM_TYPES.PSYCHIC,
      description:
        "Contrary to popular belief, it's not alway pleasant getting big spooned.",
      artist: ARTISTS.Ilya,
    },
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "39000000",
    imageUrl: "009kadalaxUC.png",
    card: {
      number: 9,
      name: "Kadalax",
      type: PM_TYPES.PSYCHIC,
      description:
        "Contrary to popular belief, it's not alway pleasant getting big spooned.",
      artist: ARTISTS.Ilya,
    },
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "40000000",
    imageUrl: "009kadalaxR.png",
    card: {
      number: 9,
      name: "Kadalax",
      type: PM_TYPES.PSYCHIC,
      description:
        "Contrary to popular belief, it's not alway pleasant getting big spooned.",
      artist: ARTISTS.Ilya,
    },
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "41000000",
    imageUrl: "010kadalaxslimC.png",
    card: {
      number: 10,
      name: "Kadalax Slim",
      type: PM_TYPES.PSYCHIC,
      description:
        "Some Kadalax, having conquered their material vices, are able to sustain themselves off air and thought alone.",
      artist: ARTISTS.Ilya,
    },
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "42000000",
    imageUrl: "010kadalaxslimUC.png",
    card: {
      number: 10,
      name: "Kadalax Slim",
      type: PM_TYPES.PSYCHIC,
      description:
        "Some Kadalax, having conquered their material vices, are able to sustain themselves off air and thought alone.",
      artist: ARTISTS.Ilya,
    },
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "43000000",
    imageUrl: "010kadalaxslimR.png",
    card: {
      number: 10,
      name: "Kadalax Slim",
      type: PM_TYPES.PSYCHIC,
      description:
        "Some Kadalax, having conquered their material vices, are able to sustain themselves off air and thought alone.",
      artist: ARTISTS.Ilya,
    },
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "44000000",
    imageUrl: "011zapduckC.png",
    card: {
      number: 11,
      name: "Zapduck",
      type: PM_TYPES.LIGHTNING,
      description: "Strike one, you're out.",
      artist: ARTISTS.Morlux,
    },
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "45000000",
    imageUrl: "011zapduckUC.png",
    card: {
      number: 11,
      name: "Zapduck",
      type: PM_TYPES.LIGHTNING,
      description: "Strike one, you're out.",
      artist: ARTISTS.Morlux,
    },
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "46000000",
    imageUrl: "011zapduckR.png",
    card: {
      number: 11,
      name: "Zapduck",
      type: PM_TYPES.LIGHTNING,
      description: "Strike one, you're out.",
      artist: ARTISTS.Morlux,
    },
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "47000000",
    imageUrl: "011zapduckL.png",
    card: {
      number: 11,
      name: "Zapduck",
      type: PM_TYPES.LIGHTNING,
      description: "Strike one, you're out.",
      artist: ARTISTS.Morlux,
    },
    rarity: PM_RARITY.L,
  },
  {
    tokenId: "48000000",
    imageUrl: "012goldenkobanC.png",
    card: {
      number: 12,
      name: "Golden Koban",
      type: PM_TYPES.ITEM,
      description: "",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "49000000",
    imageUrl: "012goldenkobanUC.png",
    card: {
      number: 12,
      name: "Golden Koban",
      type: PM_TYPES.ITEM,
      description: "",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "50000000",
    imageUrl: "012goldenkobanR.png",
    card: {
      number: 12,
      name: "Golden Koban",
      type: PM_TYPES.ITEM,
      description: "",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "51000000",
    imageUrl: "013goldenkobanC.png",
    card: {
      number: 13,
      name: "Golden Koban",
      type: PM_TYPES.ITEM,
      description: "",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "52000000",
    imageUrl: "013goldenkobanUC.png",
    card: {
      number: 13,
      name: "Golden Koban",
      type: PM_TYPES.ITEM,
      description: "",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "53000000",
    imageUrl: "013goldenkobanR.png",
    card: {
      number: 13,
      name: "Golden Koban",
      type: PM_TYPES.ITEM,
      description: "",
      artist: ARTISTS.LilyPonto,
    },
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "54000000",
    imageUrl: "014changeteamsC.png",
    card: {
      number: 14,
      name: "Change Teams",
      type: PM_TYPES.SUPPORTER,
      description: "",
      artist: ARTISTS.NinjaGuy,
    },
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "55000000",
    imageUrl: "014changeteamsUC.png",
    card: {
      number: 14,
      name: "Change Teams",
      type: PM_TYPES.SUPPORTER,
      description: "",
      artist: ARTISTS.NinjaGuy,
    },
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "56000000",
    imageUrl: "014changeteamsR.png",
    card: {
      number: 14,
      name: "Change Teams",
      type: PM_TYPES.SUPPORTER,
      description: "",
      artist: ARTISTS.NinjaGuy,
    },
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "57000000",
    imageUrl: "014changeteamsL.png",
    card: {
      number: 14,
      name: "Change Teams",
      type: PM_TYPES.SUPPORTER,
      description: "",
      artist: ARTISTS.NinjaGuy,
    },
    rarity: PM_RARITY.L,
  },
  {
    tokenId: "58000000",
    imageUrl: "015rashscratchumC.png",
    card: {
      number: 15,
      name: "Rash Scratchum",
      type: PM_TYPES.SUPPORTER,
      description: "",
      artist: ARTISTS.NinjaGuy,
    },
    rarity: PM_RARITY.C,
  },
  {
    tokenId: "59000000",
    imageUrl: "015rashscratchumUC.png",
    card: {
      number: 15,
      name: "Rash Scratchum",
      type: PM_TYPES.SUPPORTER,
      description: "",
      artist: ARTISTS.NinjaGuy,
    },
    rarity: PM_RARITY.U,
  },
  {
    tokenId: "60000000",
    imageUrl: "015rashscratchumR.png",
    card: {
      number: 15,
      name: "Rash Scratchum",
      type: PM_TYPES.SUPPORTER,
      description: "",
      artist: ARTISTS.NinjaGuy,
    },
    rarity: PM_RARITY.R,
  },
  {
    tokenId: "61000000",
    imageUrl: "015rashscratchumL.png",
    card: {
      number: 15,
      name: "Rash Scratchum",
      type: PM_TYPES.SUPPORTER,
      description: "",
      artist: ARTISTS.NinjaGuy,
    },
    rarity: PM_RARITY.L,
  },
  {
    tokenId: "62000000",
    imageUrl: "016babymeownautML.png",
    card: {
      number: 16,
      name: "Baby Meownaut",
      type: PM_TYPES.PSYCHIC,
      description: "It's too adorable for words.",
      artist: ARTISTS.Mathijs,
    },
    rarity: PM_RARITY.M,
  },
];

export default BLAST_OFF_COLLECTION;
