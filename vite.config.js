import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    // This forces Vite to pre-bundle react-icons so it bypasses the deep sub-folder bugs!
    include: ['react-icons/fa6', 'react-icons/lu', 'react-icons/go', 'react-icons/io', 'react-icons/fi'],
  },
})
