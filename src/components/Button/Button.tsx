import React from "react";
import "./button.css";
import MaterialButton, {
  ButtonProps as MaterialProps,
} from "@material-ui/core/Button";
import styled from "styled-components";

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

const StyledButton = styled(MaterialButton)`
  background-color: #ff1cb3;
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
