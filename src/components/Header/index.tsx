import React from "react";
import styled from "styled-components";
import BalanceCounter from "../BalanceCounter";

export interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "row-reverse",
      height: 100,
      paddingTop: "10px",
      backgroundColor: "grey",
    }}
  >
    <BalanceCounter
      imgUrl="images/balls/MAXRBALL.png"
      balance={1204.0239}
      style={{}}
    />
  </div>
);

export { default as NavHeader } from "./NavHeader";
