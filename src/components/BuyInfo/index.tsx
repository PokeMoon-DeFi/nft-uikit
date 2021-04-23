import Button from "../Button";
import styled from "styled-components";
import { PokemoonPack } from "../../constants/nfts/types";

export interface BuyInfoProps {
  pack: PokemoonPack;
  price: number;
  lastPackId: number;
  pbPrice: number;
  account: string;
  allowance: number;
  balance: number;
  onConnectClicked: () => void;
  onApproveClicked: () => void;
  onBuyClicked: () => void;
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
  align-items: center;
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

export const BuyInfo = (props: BuyInfoProps) => {
  const pack = props.pack;
  const price = props.price;
  const lastPackId = props.lastPackId;
  const pbPrice = props.pbPrice;
  const {
    allowance,
    account,
    onApproveClicked,
    onBuyClicked,
    balance,
    onConnectClicked,
  } = props;
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
        {!account ? (
          <Button label="Connect" icon="Backpack" onClick={onConnectClicked} />
        ) : allowance > 0 ? (
          <Button label="Approve" icon="Buy" onClick={onApproveClicked} />
        ) : balance > price ? (
          <Button label="Buy" icon="Buy" onClick={onBuyClicked} />
        ) : (
          <Button label="Not enough pokeballs 😕" icon="Buy" disabled />
        )}
      </Description>
    </Container>
  );
};
