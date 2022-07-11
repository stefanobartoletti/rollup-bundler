// --- Import plugins ---

import del from 'rollup-plugin-delete'
import nodeResolve from '@rollup/plugin-node-resolve'; 
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import styles from "rollup-plugin-styles";
import html from "@rollup/plugin-html";

// --- Variables ---

const production = (process.env.NODE_ENV === 'production');

// --- Rollup configuration ---
 
export default {
  input: 'main.js',
  output: {
    file: 'dist/scripts.js',
    format: 'iife',
    assetFileNames: "[name][extname]"
  },
  plugins: [
    del({ targets: './dist' }),
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    production && terser(),
    styles({
      mode: ["extract", "scripts.css"],
      minimize: production ? true : false,
    }),
    html({
      publicPath: ''
    }),
  ] 
};
