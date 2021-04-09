import React, { SVGProps } from "react";
import "./button.css";
import { ButtonBase, ButtonBaseProps } from "@material-ui/core";

import styled from "styled-components";
import { Backpack, SvgProps } from "../Svg";

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
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  icon: string;
}

const StyledButton = styled(ButtonBase)`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 83px;
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  padding: 10px;
  flex: auto;
`;

const StyledBackpack = styled(Backpack)``;

const getIcon = (name: string, props: any) => {
  switch (name) {
    case "Backpack":
      return <Backpack {...props} />;
    default:
      return Backpack;
  }
};

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  label,
  icon,
  ...props
}) => {
  const BackpackIcon = () => getIcon("Backpack", { width: 20, height: 30 });

  return (
    <StyledButton {...props}>
      {label}
      <BackpackIcon />{" "}
    </StyledButton>
  );
};
