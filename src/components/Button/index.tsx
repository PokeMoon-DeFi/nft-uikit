import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { ButtonBaseProps } from "@material-ui/core";
import { Backpack, Buy, Run, Transfer } from "components/Icons";

export interface ButtonProps extends ButtonBaseProps {
  label?: string;
  icon?: string;
}

const StyledButton = styled(Button)`
  background: #ffffff;

  border-radius: 48px;
  padding: 18px;
  font-family: "futura-pt", sans-serif;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  flex: none;

  &:hover {
    background-color: black;
    color: white;
    transition: 0.33s ease;
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
    case "Run":
      return Run;
    case "Transfer":
      return Transfer;
    default:
      return null;
  }
};

/**
 * Primary UI component for user interaction
 */
const NewButton: React.FC<ButtonProps> = ({
  label,
  icon,
  children,
  ...props
}) => {
  const ButtonIcon = getIcon(icon);

  return (
    //@ts-ignore
    <StyledButton variant="contained" {...props}>
      <span style={{ marginLeft: 6 }}>{label}</span>
      {ButtonIcon ? (
        <ButtonIcon height={"10vh"} style={{ paddingLeft: "1em" }} />
      ) : null}
    </StyledButton>
  );
};

export default NewButton;
