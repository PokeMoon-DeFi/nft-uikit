import { muiTheme } from "storybook-addon-material-ui";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";

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
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <Story />
        </StylesProvider>
      </ThemeProvider>
    );
  },
];
