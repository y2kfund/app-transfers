import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'

  return {
    plugins: [
      vue(),
      ...(isLib ? [dts({ include: ['src'] })] : [])
    ],
    ...(isLib ? {
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'Transfers',
          fileName: 'index'
        },
        rollupOptions: {
          external: ['vue', '@y2kfund/core', 'ag-grid-vue3', 'ag-grid-community'],
          output: {
            globals: {
              vue: 'Vue',
              '@y2kfund/core': 'Y2KCore'
            }
          }
        }
      }
    } : {}),
    server: { port: 5173 }
  }
})