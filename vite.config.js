import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";
import vue from '@vitejs/plugin-vue';
import flowbite from 'flowbite/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    flowbite()
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ]
  }
})