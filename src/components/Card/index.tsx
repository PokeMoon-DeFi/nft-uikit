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
import { PokemoonNft } from "../../constants";

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

const StyledCardContent = styled(CardContent)`
  background: white;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0 -4px 15px 1px black;
`;

const PokemoonCard = React.forwardRef<CardHandle, CardWrapper>(
  ({ nft, imageUrl, onSubMenuSelect, onClick }, ref) => {
    const cardRef = useRef(null);
    const [onPresent, onDismiss] = useModal(
      <div style={{}}>
        {/* @ts-ignore */}
        <InspectCard nft={nft} />
      </div>
    );
    const [active, setActive] = useState(false);
    useImperativeHandle(ref, () => ({
      setFocus: (active) => {
        setActive(active);
      },
    }));
    const modalCallback = useCallback(() => {
      onPresent();
    }, [onPresent]);

    return (
      <Card
        elevation={10}
        style={{
          height: "100%",
          flex: 1,
          flexDirection: "column",
          backgroundColor: "transparent",
          borderRadius: 10,
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
          <Typography variant="h5" gutterBottom>
            Dis Mon
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </StyledCardContent>
        <CardActions style={{ background: "white" }}>
          <Button label="Inspect" onClick={modalCallback} />
        </CardActions>
      </Card>
    );
  }
);

export default PokemoonCard;
