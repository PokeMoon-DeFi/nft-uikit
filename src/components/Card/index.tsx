import React, { PropsWithRef, useImperativeHandle, useRef } from "react";
import { Card, CardProps } from "@material-ui/core";
import styled from "styled-components";

interface StyledCardProps {
  cardId?: string;
  active?: boolean;
  onClick: () => void;
}

interface CardHandle {
  focus: () => void;
}

const StyledCard = styled.div<StyledCardProps>`
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

  background-size: cover;
  width: 200px;
  aspect-ratio: 746/1038;
  flex: 0 0 auto;

  ${({ active }) => {
    if (active) {
      return "box-shadow: 10px 5px 5px red;";
    }
  }}

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

const C = React.forwardRef<CardHandle, StyledCardProps>((props, ref) => {
  const cardRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log("FOCUSED: " + cardRef.current);
    },
  }));
  //@ts-ignore
  return <StyledCard ref={cardRef} {...props} />;
});

export default C;
