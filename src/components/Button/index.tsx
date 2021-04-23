import React from "react";
import { ButtonBase, ButtonBaseProps } from "@material-ui/core";
import { Backpack, Buy } from "../Icons";
import styled from "styled-components";

export interface ButtonProps extends ButtonBaseProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  icon?: string;
}

const StyledButton = styled.button`
  background: #ffffff;

  border-radius: 83px;
  padding: 10px;
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;

  flex: none;

  @media (hover: hover) {
    &:hover {
      background-color: black;
      color: white;
      transition: 0.33s ease;
      fill: white;
    }
  }

  &:active {
    background-color: black;
    transform: scale(1.1, 1.1);
    transition: 0.01s ease;
    fill: white;
  }

  &:focus {
    outline: none;
  }
`;

const getIcon = (name: string | undefined) => {
  switch (name) {
    case "Backpack":
      return Backpack;
    case "Buy":
      return Buy;
    default:
      return null;
  }
};

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  label,
  icon,
  children,
  ...props
}) => {
  const ButtonIcon = getIcon(icon);

  return (
    <StyledButton {...props}>
      <span style={{ marginLeft: 10, textAlign: "center", fontSize: 16 }}>
        {label}
      </span>
      {children}
      {ButtonIcon ? (
        <ButtonIcon height={"5vh"} style={{ paddingLeft: 20 }} />
      ) : null}
    </StyledButton>
  );
};

export default Button;
