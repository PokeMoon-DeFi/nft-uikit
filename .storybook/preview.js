import { ThemeProvider } from "styled-components";
import Theme, { GlobalStyle } from "../src/theme";
import { StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
import { MaterialTheme } from "../src/theme";
import ModalProvider from "../src/providers/ModalContext";

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
          <MaterialThemeProvider theme={MaterialTheme}>
            <GlobalStyle />
            <ModalProvider>
              <Story />
            </ModalProvider>
          </MaterialThemeProvider>
        </StylesProvider>
      </>
    );
  },
];
