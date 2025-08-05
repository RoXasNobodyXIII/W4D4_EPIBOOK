import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@context': path.resolve(__dirname, './context'),
      '@components': path.resolve(__dirname, './src/components'),
      '@css': path.resolve(__dirname, './css'),
    },
  },
  server: {
    historyApiFallback: true,
    hmr: {
      overlay: false,
    },
  },
})
