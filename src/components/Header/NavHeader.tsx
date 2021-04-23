import { FC } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Logo } from "components/Icons";
import Hidden from "@material-ui/core/Hidden";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import Button from "components/Button";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

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

export interface NavHeaderProps {
  account: string;
}

const StyledLink = styled(Typography)`
  color: white;
  font-size: 2em;
  text-decoration: none;
  font-weight: bold;
`;

const NavHeader: FC<NavHeaderProps> = ({ account }) => {
  return (
    <>
      <AppBar
        style={{
          background:
            "radial-gradient(58.94% 58.94% at 50% 50%, #014482 0%, #210035 100%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          // flexDirection: "row",
          // paddingLeft: 10,
          // marginLeft: 0,
          // paddingRight: 20,
          // fontSize: 12,
          // textAlign: "center",
          // alignItems: "center",
        }}
        position="fixed"
      >
        <Toolbar>
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
                label={[account.slice(0, 5), account.slice(-5)].join("...")}
                style={{ width: "100%" }}
              />

              {/*  <BalanceCounter imgUrl={"/images/balls/MAXRBALL.png"} balance={0} /> */}
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavHeader;
