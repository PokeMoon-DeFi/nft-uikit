/**
 * Artist data attached to cards
 */
export interface ArtistInfo {
  name: string;
  instagram?: string;
  address?: string;
}


export interface PokemoonCard {
  number: number;
  name: string;
  type: string;
  description: string;
  artist?: ArtistInfo;
}

/**
 * PokeMoon NFT with unique tokenId and asset for each card number + rarity. PokeMoon card info is shared across multiple tokenIds
 */
export interface PokemoonNft {
  tokenId: string;
  set: string;
  imageUrl: string;
  rarity?: string;
  number?: number;
  name?: string;
  type?: string;
  description?: string;
  gifUrl?: string;
  glbUrl?: string;
  tokenUriResponse?: any;
  artist?: ArtistInfo;
}

/**
 * ERC-721 that can be evaluated back to master NFT data
 */
export interface PokemoonPack {
  name?: string;
  pokeball?: string;
  nfts?: PokemoonNft[];
  packId: string;
  imageUrl?: string;
}
