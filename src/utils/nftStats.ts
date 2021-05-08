import { RARITIES } from "constants/nfts";
import { PokemoonNft } from "constants/nfts/types";
import tokenIdToPack from "constants/tokenIdToPack.json";
import blastoffPacks from "constants/blastOffPacks.json";

export interface Rarities {
  [key: string]: number;
  [RARITIES.COMMON]: number;
  [RARITIES.UNCOMMON]: number;
  [RARITIES.RARE]: number;
  [RARITIES.LEGENDARY]: number;
  [RARITIES.MOONLIKE]: number;
}

//@ts-ignore
export const getRarities = (nfts: PokemoonNft[] | undefined) => {
  const rarityCount = nfts?.reduce(
    (acc, curr) => {
      const rarity = curr.rarity;
      if (!!rarity && rarity in acc) {
        //@ts-ignore
        acc[rarity] = acc[rarity] + 1;
      }
      return acc;
    },
    {
      [RARITIES.COMMON]: 0,
      [RARITIES.UNCOMMON]: 0,
      [RARITIES.RARE]: 0,
      [RARITIES.LEGENDARY]: 0,
      [RARITIES.MOONLIKE]: 0,
    }
  );
  return rarityCount;
};

export const flattenUserNfts = (nfts: PokemoonNft[]) => {
  return nfts.map((nft, index) => {
    let { card, uniqueId, set } = nft;
    uniqueId = uniqueId ?? `110000${index}`;
    const packId = getPackFromTokenId(uniqueId);
    return { ...nft, ...card, uniqueId, pack: { packId, set } };
  });
};

export const getPackFromTokenId = (tokenId: string) => {
  return (tokenIdToPack as any)[tokenId];
};

export const getCachedPackInfo = (packId: string) => {
  return (blastoffPacks as any)[packId];
};
