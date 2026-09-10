/**
 * main.tsx — Vite entry point.
 *
 * Bootstraps the React tree by mounting <App /> into the #root
 * element from index.html. Wraps in <StrictMode> so we catch
 * unsafe lifecycle warnings and double-invocation bugs in dev.
 *
 * Nothing to configure here — routing, layout, and page content
 * all live inside App. Keep this file boring.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
