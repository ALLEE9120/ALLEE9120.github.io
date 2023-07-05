import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // https://github.com/ALLEE9120/ALLEE9120.github.io
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name]-[hash].mjs',
        chunkFileNames: 'assets/[name]-[hash].mjs',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})
