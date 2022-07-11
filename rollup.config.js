// --- Import plugins ---

import nodeResolve from '@rollup/plugin-node-resolve'; 
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

// --- Variables ---

const production = (process.env.NODE_ENV === 'production');

// --- Rollup configuration ---
 
export default {
  input: 'main.js',
  output: {
    file: 'dist/js/scripts.js',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    production && terser(),
  ]
};
