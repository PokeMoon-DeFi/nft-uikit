import React from "react";
import {
  default as MaterialButton,
  ButtonProps,
} from "@material-ui/core/Button";
import { Backpack, Buy } from "../Icons";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const StyledButton = styled(MaterialButton)`
  background: #321133;
  color: white;
  border-radius: 83px;
  padding: 5px 12px;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  border: 1px solid #c139c5;
  border-width: 2px;
  border-style: solid;

  .MuiButton-label {
    text-transform: none;
  }

  @media (hover: hover) {
    &:hover {
      background-color: white;
      fill: #c139c5;
      color: black;
      transition: 0.14s ease;
    }
    &:active {
      transform: scale(1.1, 1.1);
      transition: 0.1s ease;
    }
  }
`;

const getIcon = (name: string | undefined) => {
  switch (name) {
    case "Backpack":
      return Backpack;
    case "Buy":
      return Buy;
    case "Inspect":
      return SearchIcon;
    default:
      return null;
  }
};

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <StyledButton
      variant="outlined"
      {...props}
      disableRipple
      disableTouchRipple
    />
  );
};

export default Button;
