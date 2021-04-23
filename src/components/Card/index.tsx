import React, { useImperativeHandle, useRef, useState } from "react";
import styled from "styled-components";
import Button from "components/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

interface StyledCardProps {
  imageUrl?: string;
  active?: boolean;
}

interface CardHandle {
  setFocus: (active: boolean) => void;
}

interface CardWrapper {
  onClick?: () => void;
  onSubMenuSelect?: (command: string) => void;
  imageUrl?: string;
  active?: boolean;
}

const StyledCard = styled(Card)<StyledCardProps>`
  background-color: #17141d;
  border-radius: 10px;

  /*   margin-left: -50px; */
  /* transition: 0.4s ease-out; */
  position: relative;
  left: 0px;
  background-size: contain;
  background-repeat: no-repeat;
  background: ${({ imageUrl }) => {
    if (!imageUrl) return;
    return "url(/images/cards/" + imageUrl + ")";
  }};

  height: 200px;

  aspect-ratio: 746/1038;
  /* flex: 0 0 auto;

  flex-direction: column;
  justify-content: center;
  align-items: center; */

  ${({ active }) => {
    if (active) {
      return "box-shadow: 10px 5px 5px red;";
    } else return "box-shadow: -.5rem 0 1rem #000;";
  }}
`;

const HoverMenu = styled.div`
  left: 50px;
  z-index: 1;
  background-color: transparent;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const getImageUrl = (imageUrl: string | undefined) => {
  return `/images/cards/${imageUrl}`;
};

const PokemoonCard = React.forwardRef<CardHandle, CardWrapper>(
  ({ imageUrl, onSubMenuSelect, onClick }, ref) => {
    const cardRef = useRef(null);
    const [active, setActive] = useState(false);
    useImperativeHandle(ref, () => ({
      setFocus: (active) => {
        setActive(active);
      },
    }));

    return (
      <Card
        style={{
          height: "100%",
          flex: 1,
          flexDirection: "column",
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
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Dis Mon
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button label="Inspect" />
        </CardActions>
      </Card>
    );
  }
);

export default PokemoonCard;
