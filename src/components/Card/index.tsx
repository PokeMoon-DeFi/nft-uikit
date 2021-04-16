import React, { useImperativeHandle, useRef, useState } from "react";
import styled from "styled-components";
import Button from "components/Button";

interface StyledCardProps {
  cardId?: string;
  imageUrl?: string;
  active?: boolean;
  onClick?: () => void;
}

interface CardHandle {
  setFocus: (active: boolean) => void;
}

const StyledCard = styled.div<StyledCardProps>`
  background-color: #17141d;
  border-radius: 10px;

  /*   margin-left: -50px; */
  /* transition: 0.4s ease-out; */
  position: relative;
  left: 0px;
  background: ${({ imageUrl }) => {
    imageUrl = imageUrl ?? "001meownautC.png";
    return "url(images/cards/" + imageUrl + ")";
  }};

  background-size: contain;

  height: 200px;
  background-repeat: no-repeat;

  aspect-ratio: 746/1038;
  flex: 0 0 auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ active }) => {
    if (active) {
      return "box-shadow: 10px 5px 5px red;";
    } else return "box-shadow: -.5rem 0 1rem #000;";
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

const HoverMenu = styled.div`
  left: 50px;
  z-index: 1;
  background-color: white;
  margin-left: 10px;
`;

const Card = React.forwardRef<CardHandle, StyledCardProps>(
  ({ cardId, imageUrl, ...props }, ref) => {
    const cardRef = useRef(null);
    const [active, setActive] = useState(false);
    useImperativeHandle(ref, () => ({
      setFocus: (active) => {
        setActive(active);
      },
    }));

    //@ts-ignore
    return (
      <div
        style={{
          position: "relative",
          marginRight: active ? 40 : 0,
          display: "flex",
        }}
      >
        <StyledCard
          ref={cardRef}
          imageUrl={imageUrl}
          {...props}
          active={active}
        ></StyledCard>
        {active && (
          <HoverMenu>
            <Button label="Info" icon="Backpack" />
          </HoverMenu>
        )}
      </div>
    );
  }
);

export default Card;
