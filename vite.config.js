import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'
  },
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/e2e/**'
    ],
    reporters: ['verbose', 'junit', 'html'],
    outputFile: {
      junit: './reports/junit.xml',
      html: './reports/html/index.html'
    }
  }
})
