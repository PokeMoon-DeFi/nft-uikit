import styled from "styled-components";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { FC } from "react";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import { Gallery } from "../Gallery";
import { BLAST_OFF_COLLECTION } from "../../utils/StoryData";
import Toolbar from "@material-ui/core/Toolbar";
import { Fab } from "components/Fab";
import { NavHeader } from "components/Header";
import { Content } from "components/layout";

//TODO: Swap icons for pokemoon stuff
const linkConfig = [
  {
    target: "/buy",
    label: "Buy",
    icon: <StoreOutlinedIcon />,
  },
  {
    target: "/gallery",
    label: "Gallery",
    icon: <PhotoSizeSelectActualIcon />,
  },
];

const StyledLinkContainer = styled(Typography)`
  background: white;
  border-radius: 28px;

  min-height: 40px;
  padding: 20px;
  margin: 10px;
  border: 2px solid #2e0cff;
  text-align: center;
`;

const ACCOUNT = "0xce753a7d4C36339B1e427684402bE0D53064FeA6";

const FullDemo: FC = () => {
  return (
    <>
      <NavHeader account={ACCOUNT} />
      <Fab />
      <Content maxWidth="md">
        <Gallery nfts={BLAST_OFF_COLLECTION} />
      </Content>
    </>
  );
};
export default FullDemo;
