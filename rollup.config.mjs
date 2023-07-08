import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import copy from 'rollup-plugin-copy-assets';
import url from "postcss-url";
import path from "path";

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
      postcss({
        plugins: [
          url(
            // { filter: '**/assets/images/*.png', url: 'copy', assetsPath: 'img', useHash: true },
            { url: "rebase" }
          )
          // url({
          //   url: 'copy',
          //   // base path to search assets from
          //   basePath: path.resolve('assets/images'),
          //   // dir to copy assets
          //   assetsPath: 'img',
          //   // using hash names for assets (generates from asset content)
          //   useHash: true
          // }),
        ]
      }),
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