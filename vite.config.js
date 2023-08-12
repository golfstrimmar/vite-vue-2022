import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { plugin as picm } from "vite-plugin-vue-pug-with-css-modules";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [picm(),vue()]
})
