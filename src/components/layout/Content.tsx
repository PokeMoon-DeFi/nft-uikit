import styled from "styled-components";
import Container from "@material-ui/core/Container";
import { FC } from "react";

const Content = styled(Container)`
  margin-bottom: 0;
  overflow: "auto";
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export default Content;
