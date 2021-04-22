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

const linkConfig = [
  {
    target: "/buy",
    label: "Buy Packs",
  },
  {
    target: "/gallery",
    label: "Gallery",
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
    <>
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
          justifyContent: "space-between",
          fontSize: 12,
          textAlign: "center",
          alignItems: "center",
        }}
        position="static"
      >
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
      </AppBar>
      <Container style={{ height: "100vh", padding: 0 }} maxWidth="md">
        <Hidden smUp>
          <Fab
            color="primary"
            aria-label="add"
            style={{
              position: "absolute",
              bottom: theme.spacing(2),
              right: theme.spacing(2),
            }}
          >
            <AddIcon />
          </Fab>
        </Hidden>
      </Container>
    </>
  );
};
export default NavHeader;
