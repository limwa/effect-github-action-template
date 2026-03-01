/// <reference types='vitest' />
import { defineConfig } from 'vitest/config';

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: './node_modules/.vite/javascript-action',
  plugins: [],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  test: {
    name: 'javascript-action',
    watch: false,
    globals: false,
    environment: 'node',
    include: ['tests/**/*.spec.ts'],
    reporters: ['default'],
    coverage: {
      enabled: true,
      reportsDirectory: './coverage',
      provider: 'istanbul' as const,
      reporter: ['text', 'html', 'json-summary']
    },
  },
}));