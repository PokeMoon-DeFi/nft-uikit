import { Header } from "components/layout";
import { Logo } from "components/Icons";
import Button from "components/Button";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import BalanceCounter from "components/BalanceCounter";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/AddIcCallRounded";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Container from "@material-ui/core/Container";
import { FC } from "react";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import { Carousel } from "../Carousel";
import { BLAST_OFF_COLLECTION } from "../../utils/StoryData";
import Toolbar from "@material-ui/core/Toolbar";

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

const StyledLink = styled(Typography)`
  color: white;
  font-size: 2em;
  text-decoration: none;
  font-weight: bold;
`;

const ACCOUNT = "0xce753a7d4C36339B1e427684402bE0D53064FeA6";

const NavHeader: FC = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        overflow: "hidden",
        // paddingBottom: "12vh",
        position: "relative",
      }}
    >
      <AppBar
        style={{
          background:
            "radial-gradient(58.94% 58.94% at 50% 50%, #014482 0%, #210035 100%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          flexDirection: "row",
          paddingLeft: 10,
          marginLeft: 0,
          paddingRight: 20,
          fontSize: 12,
          textAlign: "center",
          alignItems: "center",
        }}
        position="static"
      >
        <Toolbar style={{ flex: 1 }}>
          <Logo
            style={{
              height: "10vh",
              flexShrink: 5,
              minWidth: 150,
              marginRight: 10,
            }}
          />
          <Hidden xsDown>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                display: "flex",
                margin: 10,
                flexDirection: "row",
              }}
            >
              {linkConfig.map((link) => (
                <StyledLink
                  style={{ margin: 20 }}
                  onClick={() => {
                    window.location.href = link.target;
                  }}
                >
                  {link.label}
                </StyledLink>
              ))}
            </div>
            <div
              style={{
                flexDirection: "column",
                height: "80%",
                alignContent: "center",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button
                disabled
                label={[ACCOUNT.slice(0, 5), ACCOUNT.slice(-5)].join("...")}
                style={{ width: "100%" }}
              />

              {/*  <BalanceCounter imgUrl={"/images/balls/MAXRBALL.png"} balance={0} /> */}
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Container
        style={{
          height: "88%",
          // padding: 30,
          marginBottom: 0,
          overflow: "auto",
        }}
        maxWidth="md"
      >
        <Carousel nfts={BLAST_OFF_COLLECTION} />
        <Hidden smUp>
          <SpeedDial
            ariaLabel="Speed Dial"
            color="primary"
            aria-label="add"
            icon={<SpeedDialIcon />}
            open={true}
            style={{
              position: "absolute",
              bottom: theme.spacing(2),
              right: theme.spacing(2),
            }}
          >
            {linkConfig.reverse().map((link) => {
              return (
                <SpeedDialAction
                  key={link.label}
                  icon={link.icon}
                  tooltipTitle={link.label}
                  tooltipOpen
                  onClick={() => (window.location.href = link.target)}
                />
              );
            })}
          </SpeedDial>
        </Hidden>
      </Container>
    </div>
  );
};
export default NavHeader;
