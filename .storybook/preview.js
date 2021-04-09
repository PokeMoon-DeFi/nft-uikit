import { ThemeProvider } from "styled-components";
import Theme, { GlobalStyle } from "../src/theme";

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
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </>
    );
  },
];
