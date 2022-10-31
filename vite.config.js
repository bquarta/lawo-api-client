import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'lwa-[name].js',
        assetFileNames: 'lwa-[name].css',
        chunkFileNames: 'lwa-chunk-[name].js',
        manualChunks: undefined
      }
    }
  }
})
