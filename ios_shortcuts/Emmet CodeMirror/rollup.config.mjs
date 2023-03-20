import {nodeResolve} from "@rollup/plugin-node-resolve"
export default {
  input: "./editor.js",
  external: ['@codemirror/basic-setup'],
  output: {
    file: "./editor.bundle.js",
    format: "iife",
    globals: {
      "@codemirror/basic-setup": 'basicSetup'
    }
  },
  plugins: [nodeResolve()]
}