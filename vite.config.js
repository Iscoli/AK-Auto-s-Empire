import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Ensure React plugin is installed
import tailwindcss from 'tailwindcss'; // Import Tailwind CSS
import autoprefixer from 'autoprefixer'; // Optional: For autoprefixing CSS

export default defineConfig({
  plugins: [
    react(), // React plugin for Vite
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Tailwind CSS plugin
        autoprefixer(), // Optional: Autoprefixer for better browser compatibility
      ],
    },
  },

  server: {
    proxy: {
      "/api": "http://localhost:3000", // Proxy all /api requests to the backend
    },
  },
});