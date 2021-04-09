import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export interface FlexProps {
  width: number;
  height: number;
}

const StyledFlex = styled.div`
  display: flex;
  flex: auto;
  background-color: #5a5a5a;
`;

const FlexContainer = ({
  children,
  width,
  height,
  ...props
}: PropsWithChildren<FlexProps>) => {
  return (
    <StyledFlex {...props} style={{ width, height }}>
      {children}
    </StyledFlex>
  );
};

export default FlexContainer;
