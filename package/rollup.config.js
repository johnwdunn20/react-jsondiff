// configures how your source files are bundled, and compiles to TypeScript
 
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.tsx', // Main TypeScript file of our package
  output: [
    {
      file: 'dist/cjs/index.js', // CommonJS format
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/esm/index.js', // ES Module format
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(), // prevents duplicate bundling and in theory, multiple versions of react
    resolve({ browser: true}), // perfer browser version of modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript({ tsconfig: './tsconfig.json' }), // TypeScript plugin
    babel({
      exclude: 'node_modules/**', // Babel for transpiling React and ES6
      presets: ['@babel/preset-react']
    }),
    terser(), // Minifies the bundles
    copy({
      targets: [
        { src: 'src/styles.css', dest: 'dist' }, // Copies the CSS file to the dist folder
      ]
    }),
    postcss({ // Add the plugin to your plugins array
      extensions: ['.css'], // Optional: you can limit the plugin to specific file extensions
    })
  ]
};
 