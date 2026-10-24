import { defineConfig, type Connect, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// Páginas legales estáticas (texto en el HTML, sin depender de JS)
const legalPages = ['privacidad', 'eliminacion-de-datos']

// En dev/preview sirve /privacidad sin barra final igual que el .htaccess en producción
const legalPagesRewrite = (): Plugin => {
  const rewrite: Connect.NextHandleFunction = (req, _res, next) => {
    const path = req.url?.split('?')[0].replace(/\/$/, '').slice(1)
    if (path && legalPages.includes(path)) req.url = `/${path}/index.html`
    next()
  }
  return {
    name: 'legal-pages-rewrite',
    configureServer: (server) => { server.middlewares.use(rewrite) },
    configurePreviewServer: (server) => { server.middlewares.use(rewrite) },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    legalPagesRewrite(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...Object.fromEntries(legalPages.map((page) => [page, resolve(__dirname, `${page}/index.html`)])),
      },
    },
  },
})
