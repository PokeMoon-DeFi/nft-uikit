import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    color: #000000;
    background-color: #ffffff;
    font-family: 'futura-pt';
}
`;

const Theme = {
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  fontFamily: [
    '"futura-pt',
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
};

export default Theme;
