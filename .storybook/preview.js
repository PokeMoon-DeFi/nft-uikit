import { ThemeProvider } from "styled-components";
import Theme, { GlobalStyle } from "../src/theme";
import { StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
import { MaterialTheme } from "../src/theme";

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
        <MaterialThemeProvider theme={MaterialTheme}>
          <StylesProvider injectFirst>
            <ThemeProvider theme={Theme}>
              <GlobalStyle />
              <Story />
            </ThemeProvider>
          </StylesProvider>
        </MaterialThemeProvider>
      </>
    );
  },
];
