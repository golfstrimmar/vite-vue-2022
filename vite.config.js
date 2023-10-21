import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import { plugin as picm } from "vite-plugin-vue-pug-with-css-modules";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "./src/scss/main.scss";
            `,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    picm(),
    vue({
      template: { transformAssetUrls },
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      symbolId: "icon-[dir]-[name]",
      // inject ? : 'body-last' | 'body-first',
      customDomId: "__svg__icons__dom__",
    }),
    quasar({
      // sassVariables: "./node_modules/@quasar/extras/",
    }),
  ],
});
