import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'animations': ['framer-motion', 'gsap'],
          'ui': ['lucide-react'],
        },
      },
    },
    sourcemap: true,
    // Optimize chunk loading
    chunkSizeWarningLimit: 1000,
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  assetsInclude: ['**/*.PNG', '**/*.png'],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@utils': resolve(__dirname, './src/utils'),
      '@components': resolve(__dirname, './src/components'),
    }
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
    host: true,
  },
  preview: {
    port: 3000,
    open: true,
  }
})