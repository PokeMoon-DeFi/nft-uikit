import Button from "../Button";
import styled from "styled-components";
import Theme from "theme";
import { PokemoonPack } from "../../constants/nfts/types";
import { getRarityGradient, getTypeColor } from "../../utils";
import { Moon as Icon } from "../Icons";

interface BuyInfoProps {
  pack: PokemoonPack;
  price: number;
  lastPackId: number;
  pbPrice: number;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* max-width: 420px; */
  flex-basis: 500px;

  /* height: 100%; */
  justify-self: center;
`;

const PrimaryInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6px;
  margin-bottom: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Pokeball = styled.div`
  flex: 1;
  margin-left: 6px;
`;
const Pack = styled.span`
  flex: 1;
  color: #ffffff;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const DescriptionText = styled.div`
  text-align: center;
  font-style: oblique;
  padding: 6px;
`;
const FooterIcon = styled.div`
  text-align: center;
`;

const BuyInfo = (props: BuyInfoProps) => {
  const pack = props.pack;
  const price = props.price;
  const lastPackId = props.lastPackId;
  const pbPrice = props.pbPrice;
  const totalPbValueBurned = lastPackId * 100 * pbPrice;

  return (
    <Container>
      <PrimaryInfo
        style={{
          background: `linear-gradient(120deg, #ffffff 0%, #ffffff 47%, #111111 47.3%, #111111 100%)`,
        }}
      >
        <Pokeball>{pack.pokeball}</Pokeball>
        <Pack>{pack.name}</Pack>
      </PrimaryInfo>
      <Description>
        <DescriptionText>
          Packs Minted: {lastPackId} ({lastPackId * 5} Cards)
        </DescriptionText>
        <DescriptionText>Price: {price} PB</DescriptionText>
        <Button
          label="Buy"
          icon="Buy"
          style={{ margin: "6px auto", maxWidth: "210px" }}
        />
      </Description>
    </Container>
  );
};

export default BuyInfo;
