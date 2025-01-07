import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: [],
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://fifthveda.vercel.app',
        changeOrigin: true,
        secure: false
      }
    }
  }
})