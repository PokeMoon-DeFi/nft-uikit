import React from "react";
import { Card, CardProps } from "@material-ui/core";
import styled from "styled-components";

interface StyledCardProps extends CardProps {
  cardId?: string;
}

const StyledCard = styled(Card)<StyledCardProps>`
  display: flex;
  height: 280px;
  width: 200px;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
  /*   margin-left: -50px; */
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  background: ${({ cardId }) => {
    cardId = cardId ?? "001meownautC.png";
    return "url(cards/" + cardId + ")";
  }};
  min-width: 200px;

  background-size: cover;

  &:not(::first-child) {
    margin-left: -50px;
  }
  &:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
  }
  &:hover ~ & {
    position: relative;
    left: 50px;
    transition: 0.4s ease-out;
  }
`;

export default StyledCard;
