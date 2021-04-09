import React from "react";
import "./button.css";
import MaterialButton, {
  ButtonProps as MaterialProps,
} from "@material-ui/core/Button";
import styled from "styled-components";
import { withTheme } from "@material-ui/core/styles";

export interface ButtonProps extends MaterialProps {
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
}

const StyledButton = withTheme(styled(MaterialButton)`
  background-color: ${(props) => props.theme.palette.primary.main};
`);
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
