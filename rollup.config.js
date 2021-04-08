import typescript from "@rollup/plugin-typescript";
import styles from "rollup-plugin-styles";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "src/main.ts",
  output: {
    dir: "build",
    format: "cjs",
  },
  external: ["styled-components", "react/jsx-runtime"],
  plugins: [peerDepsExternal(), typescript(), styles()],
};
