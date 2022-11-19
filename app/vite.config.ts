import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
  },
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@cjs/api': fileURLToPath(new URL('../api', import.meta.url))
    },
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
})
