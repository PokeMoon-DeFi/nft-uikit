import styled from "styled-components";
import Theme from "theme";
import { PokemoonPack } from "../../constants/nfts/types";
import { getRarityGradient, getTypeColor } from "../../utils";
import { Moon as Icon } from "../Icons";

interface BuyInfoProps {
  pack: PokemoonPack;
  price: number;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 420px;
  width: 100%;
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

const BuyInfo = (props: BuyInfoProps) => {
  const pack = props.pack;
  const price = props.price;

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
        <DescriptionText>"asdf"</DescriptionText>
        <FooterIcon>
          <Icon />
        </FooterIcon>
      </Description>
    </Container>
  );
};

export default BuyInfo;
