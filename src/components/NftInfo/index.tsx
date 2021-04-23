import { PM_TYPES } from "../../constants";
import styled from "styled-components";
import { PokemoonCard, PokemoonNft } from "../../constants/nfts/types";
import { getRarityGradient, getTypeColor } from "../../utils";
import {
  Colorless,
  Dragon,
  Fire,
  Grass,
  Lightning,
  Moon as Icon,
  Psychic,
  Water,
} from "../Icons";
import { SvgProps } from "components/Svg";
import Theme from "theme";

interface NftInfoProps {
  nft: PokemoonNft;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 420px;
`;

const PrimaryInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6px;
  margin-bottom: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const NR = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;
const Number = styled.span`
  flex: 1;
  color: #111111;
`;
const Rarity = styled.span`
  flex: 3;
  color: #111111;
  font-weight: bold;
  margin-left: 6px;
`;
const Name = styled.span`
  flex: 1;
  color: #ffffff;
`;

const SecondaryInfo = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
  margin-bottom: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
`;
const PokemoonType = styled.div`
  display: flex;
  justify-content: center;
`;

const SetName = styled.span`
  color: #ffffff;
  font-weight: bold;
  margin-left: 12px;
`;

const ArtistInfo = styled.div`
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  padding: 10px;
  margin-bottom: 6px;
`;
const ArtistName = styled.span`
  color: #111111;
  font-weight: bold;
  margin-left: 12px;
`;
const ArtistInsta = styled.span`
  color: #111111;
  font-weight: bold;
  margin-left: 6px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const DescriptionText = styled.div`
  text-align: center;
  font-style: oblique;
  padding: 12px;
`;
const FooterIcon = styled.div`
  text-align: center;
`;
const getIcon = (type: string | undefined) => {
  switch (type) {
    case PM_TYPES.COLORLESS:
      return Colorless;
    case PM_TYPES.FIRE:
      return Fire;
    case PM_TYPES.GRASS:
      return Grass;
    case PM_TYPES.ITEM:
      break;
    case PM_TYPES.LIGHTNING:
      return Lightning;
    case PM_TYPES.PSYCHIC:
      return Psychic;
    case PM_TYPES.SUPPORTER:
      break;
    case PM_TYPES.WATER:
      return Water;
    default:
      return null;
  }
};

const NftInfo = (props: NftInfoProps) => {
  const card: PokemoonCard = props.nft.card
    ? props.nft.card
    : {
        number: 0,
        name: "0",
        type: "0",
        description: "0",
      };
  const rarity: string = props.nft.rarity ? props.nft.rarity : "0";
  const rarityGradient = getRarityGradient(rarity);
  const typeColor = getTypeColor(card.type);
  const TypeIcon = getIcon(card.type);

  return (
    <Container>
      <PrimaryInfo style={{ background: rarityGradient }}>
        <NR>
          <Number>No.{card.number}</Number>
          <Rarity>{rarity}</Rarity>
        </NR>
        <Name>{card.name}</Name>
      </PrimaryInfo>
      <SecondaryInfo style={{ background: typeColor, fill: "white" }}>
        <PokemoonType>
          {TypeIcon ? (
            <TypeIcon
              height={"3.6vh"}
              style={{ marginLeft: "6px", marginRight: "6px" }}
            />
          ) : null}
          {card.type}
        </PokemoonType>
      </SecondaryInfo>
      <ArtistInfo>
        Artist
        <ArtistName>{card.artist?.name}</ArtistName>
        {card.artist?.instagram ? (
          <ArtistInsta>({card.artist?.instagram})</ArtistInsta>
        ) : (
          <></>
        )}
      </ArtistInfo>
      <Description>
        <DescriptionText>"{card.description}"</DescriptionText>
        <FooterIcon>
          <Icon />
        </FooterIcon>
      </Description>
    </Container>
  );
};

export default NftInfo;
