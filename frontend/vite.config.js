import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // 👈 critical for Docker networking
    port: 3111
  }
})
