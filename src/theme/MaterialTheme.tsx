import { createMuiTheme, ThemeOptions } from "@material-ui/core";

declare module "@material-ui/core/styles/createPalette" {
  type Color = React.CSSProperties["color"];
  interface Palette {
    rarity: {
      common: React.CSSProperties["color"];
      uncommon: React.CSSProperties["color"];
      rare: React.CSSProperties["color"];
      legendary: Color;
      moonlike: Color;
    };
    types: {
      [key: string]: Color;
      item: Color;
      supporter: Color;
      psychic: Color;
      lightning: Color;
      grass: Color;
      fire: Color;
      water: Color;
      fighting: Color;
      colorless: Color;
      dark: Color;
      dragon: Color;
      metal: Color;
      fairy: Color;
    };
  }
  interface PaletteOptions {
    rarity: {
      common: React.CSSProperties["color"];
      uncommon: React.CSSProperties["color"];
      rare: React.CSSProperties["color"];
      legendary: Color;
      moonlike: Color;
    };
    types: {
      item: Color;
      supporter: Color;
      psychic: Color;
      lightning: Color;
      grass: Color;
      fire: Color;
      water: Color;
      fighting: Color;
      colorless: Color;
      dark: Color;
      dragon: Color;
      metal: Color;
      fairy: Color;
    };
  }
}

export const rawMaterialTheme: ThemeOptions = {
  typography: {
    fontFamily: ["Josefin Sans", "Roboto"].join(","),
    allVariants: {
      fontFamily: ["Josefin Sans", "Roboto"].join(","),
    },
  },
  palette: {
    rarity: {
      common: "#C8C8C8",
      uncommon: "#61D99D",
      rare: "#05A5EE",
      legendary: "#f1bf19",
      moonlike: "#3515D5",
    },
    types: {
      item: "",
      supporter: "",
      psychic: "#D166FF",
      lightning: "#FFCA0D",
      grass: "",
      fire: "#EE4D4E",
      water: "",
      fighting: "",
      colorless: "",
      dark: "",
      dragon: "",
      metal: "",
      fairy: "",
    },
  },
};

export const MaterialTheme = createMuiTheme(rawMaterialTheme);

export function createPokemoonTheme(options: ThemeOptions) {
  return createMuiTheme({ ...MaterialTheme }, { ...options });
}
