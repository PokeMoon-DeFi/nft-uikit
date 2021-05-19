import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import {
  createPokemoonTheme,
  MaterialTheme,
  PokemoonTheme,
  rawMaterialTheme,
} from "../src/theme";
import { createMuiTheme, StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
import ModalProvider from "../src/providers/ModalContext";
import { withThemes } from "@react-theming/storybook-addon";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Modal } from "@material-ui/core";

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

const providerFn = ({ theme, children }) => {
  const mutheme = createPokemoonTheme(theme);
  return (
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={mutheme}>
        <ThemeProvider theme={mutheme}>{children}</ThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  );
};
export const decorators = [
  (Story) => {
    return (
      <ModalProvider>
        <CssBaseline />
        <Story />
      </ModalProvider>
    );
  },
  withThemes(null, [rawMaterialTheme], {
    providerFn,
  }),
];
