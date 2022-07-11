import nodeResolve from '@rollup/plugin-node-resolve'; 
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
 
 
export default {
  input: 'main.js',
  output: {
    file: 'dist/js/scripts.js',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
  ]
};
