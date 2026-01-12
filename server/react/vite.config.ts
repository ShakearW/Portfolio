import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,      // enable polling
      interval: 100,         // check every 100ms
    },
    host: true,              // allow connections from outside container
  }
})
