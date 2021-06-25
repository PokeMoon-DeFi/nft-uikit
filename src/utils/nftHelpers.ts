import BigNumber from "bignumber.js";
import BLAST_OFF_COLLECTION, {
  BLAST_OFF_CARDS,
} from "config/constants/nfts/2114";
import AMPED_UP_COLLECTION from "config/constants/nfts/2116";
import MEAN_GREENS_COLLECTION from "config/constants/nfts/APB";
import { PokemoonNft } from "config/constants/nfts/types";
import blastOffTokenCache from "config/constants/cache/blastOff/tokenIdToPack.json";
import blastOffPackCache from "config/constants/cache/blastOff/blastOffPacks.json";
import { FilterState } from "components/FilterDashboard";

const isPack = (tokenId: string) => {
  let isPack: boolean;
  new BigNumber(tokenId).isLessThan(new BigNumber(11000000))
    ? (isPack = true)
    : (isPack = false);
  return isPack;
};

export const renamePack = (name: string) => {
  switch (name) {
    case "Blast-Off!": {
      return "blastOff";
    }
    case "Amped Up": {
      return "ampedUp";
    }
    case "Mean Greens": {
      return "meanGreens";
    }
  }
  return "";
};

export const getFilteredNfts = (
  userNfts: PokemoonNft[],
  filterState: FilterState
) => {
  const { rarities, types, packs, search } = filterState;

  //Match up pack names
  const renamedPacks = packs.map((pack) => renamePack(pack));

  //Check all filters
  const filteredNfts = userNfts.filter((nft) => {
    const { type, rarity, set, name } = nft;

    //search
    if (!!search) {
      if (name?.search(new RegExp(search, "gi")) === -1) {
        return false;
      }
    }

    //rarities
    if (rarities && rarities.length > 0) {
      if (!rarity || !rarities.includes(rarity)) {
        return false;
      }
    }

    //types
    if (types && types.length > 0) {
      if (!type || !types.includes(type)) {
        return false;
      }
    }

    //pack sets
    if (renamedPacks && renamedPacks.length > 0) {
      //@ts-ignore
      if (!set || !renamedPacks.includes(set)) {
        return false;
      }
    }

    return true;
  });

  return filteredNfts;
};

export const getCollection = (pack: string) => {
  switch (pack) {
    default:
    case "blasOff": {
      return BLAST_OFF_COLLECTION;
    }
    case "ampedUp": {
      return AMPED_UP_COLLECTION;
    }
    case "meanGreens": {
      return MEAN_GREENS_COLLECTION;
    }
  }
};

export const getFlatCollection = (packs: string[]) => {
  const result = [];
  let lastPackAmount = 0;

  for (const pack of packs.reverse()) {
    const vals = Object.values(getCollection(pack));
    const nfts = [];

    for (const val of vals) {
      const { card, ...nft } = val;
      const glbUrl = `/models/${pack}/` + nft.imageUrl.replace(".png", ".glb");
      const imageUrl = `/images/cards/${pack}/${nft.imageUrl}`;
      const number = lastPackAmount + card.number;
      const flattened = {
        ...nft,
        ...card,
        glbUrl,
        imageUrl,
        set: pack,
        number,
      };
      nfts.push(flattened);
    }
    lastPackAmount = nfts.length;
    result.push(...nfts.sort((a, b) => b.number - a.number));
  }

  return result;
};

const getPackCache = (pack: string) => {
  switch (pack) {
    default:
    case "blastOff": {
      return blastOffPackCache;
    }
  }
};

const getTokenCache = (pack: string) => {
  switch (pack) {
    default:
    case "blastOff": {
      return blastOffTokenCache;
    }
  }
};

const isTokenCached = (tokenId: string, pack: string) => {
  return Object.keys(getTokenCache(pack)).includes(tokenId);
};

const isPackCached = (packId: string, pack: string) => {
  return Object.keys(getPackCache(pack)).includes(packId);
};

const getBaseUri = (pack: string) => {
  switch (pack) {
    case "blastOff":
      return "https://storage.pokemoonapis.com/context/token/fde4/";
    default:
      break;
  }
};

export const getCardData = async (tokenId: string, set: string) => {
  const cardId = parseInt(tokenId.substr(0, 2));
  const { imageUrl, card, rarity } = BLAST_OFF_COLLECTION[cardId];
  const nft: PokemoonNft = { tokenId, imageUrl, ...card, rarity };

  nft.glbUrl = `/models/${set}/${imageUrl.replace(".png", ".glb")}`;
  nft.imageUrl = `/images/cards/${set}/${imageUrl}`;
  nft.set = set;
  //@ts-ignore
  nft.packId = getTokenCache(set)[tokenId];

  return nft;
};

export const handleTokenIdResponse = async (
  tokenIds: BigNumber[],
  pack: string
) => {
  const packs: string[] = [];
  const cards: PokemoonNft[] = [];

  for (const tokenId of tokenIds) {
    if (tokenId.toNumber() < 11000000) {
      packs.push(tokenId.toString());
    }
  }

  // const missingPacks = packs.filter((packId) => !isPackCached(packId, pack));
  // await collectMissingPacks(missingPacks, pack);

  for (const tokenId of tokenIds) {
    if (tokenId.toNumber() < 11000000) {
    } else {
      cards.push(await getCardData(tokenId.toString(), pack));
    }
  }

  // iterate through tokenIds
  // only get the packs
  // check if pack is cached
  // if the pack is not cached
  // add to getPackedInfo multicall
  // get array of cards data

  return { [pack]: { packs, cards } };
};

// const collectMissingPacks = async (packIds: string[], pack: string) => {
//   const nftAddresses: { [key: string]: string } = {
//     blastOff: contracts.blastOff[process.env.REACT_APP_CHAIN_ID],
//     ampedUp: contracts.ampedUp[process.env.REACT_APP_CHAIN_ID],
//   };

//   const calls = packIds.map((packId) => {
//     return {
//       address: nftAddresses[pack],
//       name: "packedInfo",
//       params: [packId],
//     };
//   });

//   const multiCallResponse = await multicall(BlastOffAbi, calls);
//   let index = 0;
//   for (const res of multiCallResponse) {
//     const packId = packIds[index];
//     const { card1, card2, card3, card4, card5 } = res;
//     const cache = getPackCache(pack);

//     cache[packId] = [card1, card2, card3, card4, card5];
//     cache["card1"] = packId;
//     cache["card2"] = packId;
//     cache["card3"] = packId;
//     cache["card4"] = packId;
//     cache["card5"] = packId;
//     index += 1;
//   }
// };
