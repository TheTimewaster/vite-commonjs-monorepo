import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // the magic is here in order to get local commonjs dependencies to work
    // else the app crashes while importing the commonjs dependency
    // see https://vitejs.dev/config/shared-options.html#resolve-preservesymlinks
    preserveSymlinks: true,
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // this alias makes HMR in the api dependency possible
      '@vcm/api': fileURLToPath(new URL('../api', import.meta.url))
    },
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
})
