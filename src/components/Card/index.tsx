import React, { useImperativeHandle, useRef, useState } from "react";
import styled from "styled-components";
import Button from "components/Button";

interface StyledCardProps {
  imageUrl?: string;
  active?: boolean;
}

interface CardHandle {
  setFocus: (active: boolean) => void;
}

interface CardWrapper {
  onClick?: () => void;
  onSubMenuSelect?: (command: string) => void;
  imageUrl?: string;
  active?: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
  background-color: #17141d;
  border-radius: 10px;

  /*   margin-left: -50px; */
  /* transition: 0.4s ease-out; */
  position: relative;
  left: 0px;
  background: ${({ imageUrl }) => {
    if (!imageUrl) return;
    return "url(/images/cards/" + imageUrl + ")";
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
  &::focus-within &:hover {
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
  background-color: transparent;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Card = React.forwardRef<CardHandle, CardWrapper>(
  ({ imageUrl, onSubMenuSelect, onClick }, ref) => {
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
          active={active}
          onClick={onClick}
        ></StyledCard>
        {active && (
          <HoverMenu>
            <Button
              label="Info"
              icon="Backpack"
              style={{ marginBottom: 10 }}
              onClick={() => (onSubMenuSelect ? onSubMenuSelect("info") : null)}
            />
          </HoverMenu>
        )}
      </div>
    );
  }
);

export default Card;
