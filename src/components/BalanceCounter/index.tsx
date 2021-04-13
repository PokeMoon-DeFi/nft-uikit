import styled from "styled-components";

const BalanceCounter = styled.div`
  width: 50%;
  max-width: 600px;
  height: 6rem;
  justify-content: space-between;
  position: relative;
  align-items: center;
  flex: 1;
  display: flex;
  padding: 6px 24px;
  background: linear-gradient(
    120deg,
    #111111 0%,
    #111111 33%,
    #ffffff 33.3%,
    #ffffff 100%
  );
`;

const StyledPBall = styled.img`
  aspect-ratio: 1;
  height: 65%;
  text-align: center;
  position: absolute;
  left: 9%;
`;

const StyledLabel = styled.span`
  position: absolute;
  right: 22.5%;
  justify-content: center;
  text-align: center;
  font-size: 3rem;
`;

export default () => {
  return (
    <BalanceCounter>
      <StyledPBall src={"images/MAXRBALL.png"} />
      <StyledLabel>1280.29</StyledLabel>
    </BalanceCounter>
  );
};
