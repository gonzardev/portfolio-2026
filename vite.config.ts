import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // <--- USÁ PUNTO Y BARRA. Esto obliga a usar rutas relativas.
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})