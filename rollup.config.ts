import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import alias from '@rollup/plugin-alias'
import esbuild from 'rollup-plugin-esbuild'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import copy from 'rollup-plugin-copy'
import terser from '@rollup/plugin-terser'
import { defineConfig } from 'rollup'
import pkg from './package.json' assert { type: 'json' }

const dir = './dist'

export default defineConfig({
  input: './src/index.ts',
  output: [
    // {
    //   dir,
    //   format: 'umd',
    //   entryFileNames: pkg.exports['.'].require,
    //   name: pkg.name
    // },
    {
      dir,
      format: 'esm',
      entryFileNames: 'index.min.mjs',
      name: pkg.name,
    },
    {
      dir,
      format: 'commonjs',
      entryFileNames: 'index.min.js',
      name: pkg.name,
    },
  ],
  plugins: [
    alias({
      entries: [
        {
          find: '@',
          replacement: new URL('./src', import.meta.url).pathname,
        },
      ],
    }),
    resolve(),
    commonjs(),
    json(),
    typescript({}),
    esbuild(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.vue'],
    }),
    copy({
      targets: [
        {
          dest: ['dist'],
          src: ['src/assets/*'],
          rename: (name, ext) => `assets/${name}.${ext}`,
        },
      ],
      expandDirectories: false,
    }),
    terser(),
  ],
})
