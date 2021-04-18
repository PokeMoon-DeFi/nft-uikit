import { ThemeProvider } from "styled-components";
import Theme, { GlobalStyle } from "../src/theme";
import { StylesProvider } from "@material-ui/core/styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/gdBbGaIB2uWzp7W3pnlQxF/NFT-Exchange",
  },
};

export const decorators = [
  (Story) => {
    return (
      <>
        <StylesProvider injectFirst>
          <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Story />
          </ThemeProvider>
        </StylesProvider>
      </>
    );
  },
];
