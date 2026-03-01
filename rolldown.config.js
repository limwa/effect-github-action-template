// See: https://rolldown.rs/guide/getting-started#using-the-config-file

import { defineConfig } from 'rolldown'

export default defineConfig([
  {
    input: 'src/main.js',
    platform: 'node',

    output: {
      file: 'dist/index.js',
      esModule: true,
      format: 'esm',
      sourcemap: true
    }
  }
])
