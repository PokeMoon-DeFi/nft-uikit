import { FC, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Logo } from "components/Icons";
import Hidden from "@material-ui/core/Hidden";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import Button from "components/Button";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import DialogModal from "components/Modal/DialogModal";
import Link from "@material-ui/core/Link";

const linkConfig = [
  {
    target: "/buy",
    label: "Buy",
    icon: <StoreOutlinedIcon />,
  },
  {
    target: "/gallery",
    label: "Collection",
    icon: <PhotoSizeSelectActualIcon />,
  },
];

export interface NavHeaderProps {
  account: string;
  onConnect?: () => void;
  onLogout?: () => void;
}

const StyledLink = styled(Link)`
  color: white;
  font-size: 1.3em;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
    transition: 0.33s ease;
  }
`;

const NavHeader: FC<NavHeaderProps> = ({ account, onLogout, onConnect }) => {
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  return (
    <>
      <AppBar
        style={{
          background:
            "radial-gradient(58.94% 58.94% at 50% 50%, #014482 0%, #210035 100%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "10vh",
        }}
        position="fixed"
      >
        <Toolbar>
          <Logo
            style={{
              height: "8vh",
              flexShrink: 5,
              minWidth: 150,
              marginRight: 10,
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "https://pokemoon.app")}
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
              {account ? (
                <Button
                  label={[account.slice(0, 5), account.slice(-5)].join("...")}
                  style={{ width: "100%" }}
                  onClick={() => setLogoutModalOpen(true)}
                />
              ) : (
                <Button label="Connect" icon="Backpack" onClick={onConnect} />
              )}

              {/*  <BalanceCounter imgUrl={"/images/balls/MAXRBALL.png"} balance={0} /> */}
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <DialogModal
        open={logoutModalOpen}
        title={"Log Out?"}
        handleClose={() => setLogoutModalOpen(false)}
        handleConfirm={() => {
          setLogoutModalOpen(false);
          if (onLogout) {
            onLogout();
          }
        }}
      ></DialogModal>
    </>
  );
};

export default NavHeader;
