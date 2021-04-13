import styled from "styled-components";

const BalanceCounter = styled.div`
  width: 50%;
  max-width: 300px;
  height: 2rem;
  justify-content: center;
  position: "relative";
  align-items: center;
  flex: 1;
  display: flex;
  background: linear-gradient(
    120deg,
    #111111 0%,
    #111111 25%,
    #ffffff 25.3%,
    #ffffff 100%
  );
`;

const StyledPBall = styled.img`
  height: 100%;

  position: absolute;

  left: 0;
  aspect-ratio: 1;
`;

const StyledLabel = styled.span`
  flex: 3;
`;

export default () => {
  return (
    <BalanceCounter>
      <StyledPBall src={"images/MAXRBALL.png"} />
      <StyledLabel>1280.29</StyledLabel>
    </BalanceCounter>
  );
};
