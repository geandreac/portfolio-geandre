import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Gera source maps apenas em desenvolvimento; desativa em produção para reduzir bundle
    sourcemap: false,

    // Divide o bundle em chunks menores para melhor cache hit rate
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa React do bundle da aplicação → cache de longa duração
          'react-vendor': ['react', 'react-dom'],
          // Separa libs de UI/animação
          'ui-vendor': ['lucide-react', 'aos'],
        },
      },
    },

    // Limite de aviso de chunk aumentado levemente (padrão é 500kb)
    chunkSizeWarningLimit: 600,

    // Minificação agressiva com esbuild (já é padrão, mas declaramos explicitamente)
    minify: 'esbuild',
    target: 'es2020',
  },

  // Otimizações do servidor de desenvolvimento
  server: {
    open: false,
    hmr: true,
  },

  // Pre-bundling de dependências para HMR mais rápido
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react', 'aos'],
  },
})
