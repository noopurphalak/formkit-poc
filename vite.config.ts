import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({ resolvers: [AntDesignVueResolver({ importStyle: 'less' })] }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // modifyVars: {
        //   'primary-color': '#575CF7',
        //   'link-color': '#3436F4',
        //   'border-radius-base': '6px',
        // },
      },
    },
  },
})
