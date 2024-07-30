/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  ssr: {
    noExternal: ['@spartan-ng/**', '@ngrx/effects', '@ngrx/effects/**', '@ngrx/store', '@ngrx/store/**'],
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
  plugins: [analog({
    prerender: {
      routes: ['/', '/marketing'],
    },
  }), tsconfigPaths()],
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
