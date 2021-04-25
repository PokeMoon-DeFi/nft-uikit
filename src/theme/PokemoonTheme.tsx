import { createGlobalStyle, DefaultTheme } from "styled-components";
import { Theme } from "@material-ui/core/styles";
declare module "styled-components" {
  type Color = React.CSSProperties["color"];
  type TypeTheme = {
    bgColor: Color;
    textColor: Color;
  };
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends Theme {}
  //   export interface DefaultTheme {
  //     textSubtle: string;
  //     input: string;
  //     rarity: {
  //       common: string;
  //       uncommon: string;
  //       rare: string;
  //       legendary: {
  //         primary: string;
  //         light: string;
  //         dark: string;
  //       };
  //       moonlike: {
  //         primary: string;
  //         light: string;
  //         dark: string;
  //       };
  //     };
  //     types: {
  //       [key: string]: TypeTheme;
  //       item: TypeTheme;
  //       supporter: TypeTheme;
  //       psychic: TypeTheme;
  //       lightning: TypeTheme;
  //       grass: TypeTheme;
  //       fire: TypeTheme;
  //       fighting: TypeTheme;
  //       water: TypeTheme;
  //       colorless: TypeTheme;
  //       darkness: TypeTheme;
  //       dragon: TypeTheme;
  //       metal: TypeTheme;
  //       fairy: TypeTheme;
  //     };
  //   }
}

export const GlobalStyle = createGlobalStyle`
body {
    color: #000000;
    background-color: #ffffff;
}
`;

// export const PokemoonTheme: DefaultTheme = {
//   textSubtle: "#666666",
//   input: "#222222",
//   rarity: {
//     common: "#C8C8C8",
//     uncommon: "#61D99D",
//     rare: "#05A5EE",
//     legendary: {
//       primary: "#f1bf19",
//       light: "#FFCA1B",
//       dark: "#D0951F",
//     },
//     moonlike: {
//       primary: "",
//       light: "#3515D5",
//       dark: "#7000D2",
//     },
//   },
//   types: {
//     item: {
//       bgColor: "#C8C8C8",
//       textColor: "#ffffff",
//     },
//     supporter: {
//       bgColor: "#C8C8C8",
//       textColor: "#ffffff",
//     },
//     psychic: {
//       bgColor: "#D166FF",
//       textColor: "#ffffff",
//     },
//     lightning: {
//       bgColor: "#FFCA0D",
//       textColor: "#ffffff",
//     },
//     grass: { bgColor: "#C8C8C8", textColor: "#ffffff" },
//     fire: { bgColor: "#EE4D4E", textColor: "#ffffff" },
//     water: { bgColor: "#C8C8C8", textColor: "#ffffff" },
//     fighting: { bgColor: "#C8C8C8", textColor: "#ffffff" },
//     colorless: { bgColor: "#C8C8C8", textColor: "#ffffff" },
//     darkness: { bgColor: "#C8C8C8", textColor: "#ffffff" },
//     dragon: { bgColor: "#C8C8C8", textColor: "#ffffff" },
//     metal: { bgColor: "#C8C8C8", textColor: "#ffffff" },
//     fairy: { bgColor: "#C8C8C8", textColor: "#ffffff" },
//   },
// };
