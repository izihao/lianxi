import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      vueJsx(),
    ],
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: 'https://mock.mengxuegu.com/mock/66389cdccab9671f88bd30d8',
          changeOrigin: true,
          rewrite: (path) => path.replace(`/^\${env.VITE_APP_BASE_API}//`, '')
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    }
  }
})
