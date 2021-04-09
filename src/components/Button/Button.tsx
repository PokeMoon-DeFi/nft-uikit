import React from "react";
import "./button.css";
import { ButtonBase, ButtonBaseProps } from "@material-ui/core";

import styled from "styled-components";
import icon from "../../stories/assets/code-brackets.svg";

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

  icon: HTMLOrSVGElement;
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
`;

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  label,
  ...props
}) => {
  return <StyledButton {...props}>{label}</StyledButton>;
};
