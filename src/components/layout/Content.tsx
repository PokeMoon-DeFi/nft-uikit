import styled from "styled-components";
import Container from "@material-ui/core/Container";
import { FC } from "react";

const Content = styled(Container)`
  padding-top: 10%;
  margin-bottom: 0;
  overflow: "auto";
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default Content;
