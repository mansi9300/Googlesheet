import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(),   tailwindcss(),],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com',
        changeOrigin: true,
        secure: false, // Allow insecure SSL connections (if needed)
        headers: {
          'Access-Control-Allow-Origin': '*', // Handle CORS
        },
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
