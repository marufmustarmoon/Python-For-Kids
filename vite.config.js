import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { Buffer } from 'buffer';



export default defineConfig({
  build: {
    rollupOptions: {
      external: ['node-fetch']
    }
  },
 
  define: {
    'globalThis.fetch': 'fetch'
  },
  plugins: [react()],
  resolve: {
    alias: {
      buffer: Buffer,
    },
  },
});