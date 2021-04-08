import { muiTheme } from "storybook-addon-material-ui";
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
  muiTheme(),
  (Story) => {
    return (
      <StylesProvider injectFirst>
        <Story />
      </StylesProvider>
    );
  },
];
