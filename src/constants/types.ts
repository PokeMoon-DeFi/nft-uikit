export interface ArtistInfo {
  name: string;
  instagram?: string;
  address?: string;
}

/**
 * PokeMoon Card Info
 */
export interface PokemoonCard {
  number: Number;
  name: string;
  type: string;
  set: string;
  description: string;
  artist?: ArtistInfo;
}

/**
 * PokeMoon NFT with unique pair tokenId and rarity. PokeMoon card info is 
 * shard across multiple tokenIds
 */
export interface PokemoonNft {
  tokenId: string;
  card: PokemoonCard;
  // Depending on prefixrt's implementation tokenId
  rarity: string;
}
