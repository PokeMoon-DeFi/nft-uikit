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

const getImageUrl = (imageUrl: string | undefined) => {
  return `/images/cards/${imageUrl}`;
};

const PokemoonCard = React.forwardRef<CardHandle, CardWrapper>(
  ({ imageUrl, onSubMenuSelect, onClick }, ref) => {
    const cardRef = useRef(null);
    const [onPresent, onDismiss] = useModal(
      <div style={{ height: 200, width: 4000, background: "red" }}>TEST</div>
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
          <Button label="Inspect" onClick={modalCallback} />
        </CardActions>
      </Card>
    );
  }
);

export default PokemoonCard;
