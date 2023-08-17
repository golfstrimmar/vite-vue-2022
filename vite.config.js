import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { plugin as picm } from "vite-plugin-vue-pug-with-css-modules";
import path from "path";


export default defineConfig({
 css: {
        preprocessorOptions: {
          scss: {
            additionalData: `
              @import "./src/scss/main.scss";
            `
          }
        }
      },
  plugins: [picm(),vue()],
  resolve: {
    alias:{
      '@': path.resolve(__dirname, 'src')
    }
  }
})
