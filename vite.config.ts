/**
 * Vite configuration for the React UI kit demo application.
 *
 * Registers the React and Tailwind plugins and resolves the `@` alias to
 * `src` so application imports stay stable as the demo grows.
 *
 * @example
 * // Run the development server or production build with the project scripts.
 * // pnpm dev
 * // pnpm build
 */

import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
