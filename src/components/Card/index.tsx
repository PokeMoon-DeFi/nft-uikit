import React, {
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import Button from "components/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import useModal from "hooks/useModal";
import { InspectCard } from "components/Modal";
import { PM_TYPES, PokemoonNft } from "../../constants";
import SearchIcon from "@material-ui/icons/Search";
interface CardHandle {
  setFocus: (active: boolean) => void;
}

interface CardWrapper {
  onClick?: () => void;
  onSubMenuSelect?: (command: string) => void;
  imageUrl?: string;
  active?: boolean;
  nft?: PokemoonNft;
}

const getImageUrl = (imageUrl: string | undefined) => {
  return `/images/cards/${imageUrl}`;
};

interface CardContentProps {
  type?: string;
}

const FireGradient = `background: radial-gradient(102.02% 360.67% at 100% 13.81%, #9A1515 0%, #FF0000 27.74%, #FF6B00 71.88%);`;
const ElectricGradient = `background: radial-gradient(102.02% 360.67% at 100% 13.81%, #FFD911 0%, #FFA408 13.02%, #FF7A00 25.25%, #FF7C00 47.4%, #FFC700 71.88%);`;
const LeafGradient = `background: radial-gradient(102.02% 360.67% at 100% 13.81%, #258516 0%, #0B8E00 13.02%, #417D24 25.25%, #3FA011 47.4%, #77DE67 71.88%);`;
const PsychicGradient = `background: radial-gradient(102.02% 360.67% at 100% 13.81%, #8447D2 0%, #481ACB 11.46%, #41247D 25.25%, #8C11A0 47.4%, #B867DE 71.88%);`;
const WaterGradient = `background: radial-gradient(102.02% 360.67% at 100% 13.81%, #5BBAF0 0%, #55CCFF 11.46%, #70C9E6 25.25%, #2ABAE8 47.4%, #98E2EC 71.88%);`;

const StyledCardContent = styled(CardContent)<CardContentProps>`
  background: #232340;
  border: #a637a9;
  border-radius: 0px 0px 0px 0px;
  border-width: 6px;
  border-style: solid;
  box-shadow: 0 -4px 15px 1px black;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  display: flex;
  color: white;
  ${({ type }) => {
    switch (type) {
      default:
        return "";
    }
  }}
`;

export const NftCard = React.forwardRef<CardHandle, CardWrapper>(
  ({ nft, imageUrl, onSubMenuSelect, onClick }, ref) => {
    const cardRef = useRef(null);
    const [onPresent, onDismiss] = useModal(<InspectCard nft={nft} />);
    const [active, setActive] = useState(false);
    useImperativeHandle(ref, () => ({
      setFocus: (active) => {
        setActive(active);
      },
    }));
    const modalCallback = useCallback(() => {
      onPresent();
    }, [onPresent]);

    const type = nft?.card?.type;

    return (
      <Card
        elevation={10}
        style={{
          height: "100%",
          flex: 1,
          flexDirection: "column",
          backgroundColor: "transparent",
          borderRadius: 10,
          paddingBottom: 0,
        }}
      >
        {/* <CardHeader title="Pokemoon" /> */}
        <CardMedia
          image={getImageUrl(imageUrl)}
          style={{
            paddingTop: "75.25%",
            backgroundPosition: "left 0px top 0px",
          }}
        />
        <StyledCardContent>
          <Typography variant="h5">#{nft?.uniqueId}</Typography>
          <Typography variant="h5">{nft?.card?.name ?? ""}</Typography>
          <Typography>{nft?.card?.type}</Typography>
          <Typography>{nft?.rarity}</Typography>

          <Button
            style={{ borderColor: "grey", marginTop: 30 }}
            label="Inspect"
            icon="Inspect"
            onClick={modalCallback}
          />
        </StyledCardContent>
      </Card>
    );
  }
);

export { default as PackCard } from "./Pack";
