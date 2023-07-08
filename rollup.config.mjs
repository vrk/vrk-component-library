import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import copy from 'rollup-plugin-copy-assets'

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json"}),
      postcss(),
      copy({
        assets: [
          // You can include directories
          "src/assets",
        ],
      }),
     ]
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{file: "dist/index.d.ts", format: "esm"}],
    plugins: [dts()],
    external: [/\.css$/, "react", "react-dom"],
  }
];