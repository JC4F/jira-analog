/// <reference types="vitest" />
/// <reference types="@types/node" />

import analog from '@analogjs/platform';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
    // alias: {
    //   '@spartan-ng/ui-button-helm': path.resolve(
    //     __dirname,
    //     './src/shared/components/spartans/ui-button-helm/src/index.ts'
    //   ),
    // },
  },
  plugins: [analog(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
