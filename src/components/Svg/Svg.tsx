import styled from "styled-components";
// import getThemeValue from "../../util/getThemeValue";
import { SvgProps } from "./types";

// fill: ${({ theme, color }) => getThemeValue(`colors.${color}`, color)(theme)};
const Svg = styled.svg<SvgProps>` 
  fill: "black";
  flex-shrink: 0;
`;

Svg.defaultProps = {
  color: "text",
  width: "20px",
  xmlns: "http://www.w3.org/2000/svg",
};

export default Svg;
