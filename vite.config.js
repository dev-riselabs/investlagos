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
  build: {
    // Split large third-party libraries into dedicated chunks so the
    // main app bundle stays well under the 500 kB warning threshold
    // and browsers can cache vendor code independently of app code.
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          // Group large third-party libs into named vendor chunks so the
          // main app bundle stays small and vendor code can be cached
          // separately across deploys.
          if (id.includes('react-router')) return 'vendor-router'
          if (id.includes('react-icons')) return 'vendor-icons'
          if (id.includes('lucide-react')) return 'vendor-lucide'
          if (id.includes('embla-carousel')) return 'vendor-carousel'
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/scheduler/')
          ) {
            return 'vendor-react'
          }
        },
      },
    },
  },
})
