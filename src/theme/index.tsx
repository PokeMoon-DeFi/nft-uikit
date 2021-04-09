import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { createGlobalStyle, DefaultTheme } from "styled-components";

declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme {
    colors: {
      textSubtle: string;
      input: string;
    };
  }
}

export const GlobalStyle = createGlobalStyle`
body {
    color: #000000;
    background-color: #ffffff;
    font-family: 'futura-pt';
}
`;

const Theme: DefaultTheme = {
  colors: {
    textSubtle: "red",
    input: "green",
  },
};

export default Theme;
