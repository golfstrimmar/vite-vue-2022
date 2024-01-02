// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { plugin as picm } from "vite-plugin-vue-pug-with-css-modules";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
var __vite_injected_original_dirname = "D:\\WEB\\vite-vue-2022";
var vite_config_default = defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "./src/scss/main.scss";
            `
      }
    }
  },
  plugins: [
    picm(),
    vue(),
    quasar({}),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      symbolId: "icon-[dir]-[name]",
      customDomId: "__svg__icons__dom__"
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXRUJcXFxcdml0ZS12dWUtMjAyMlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcV0VCXFxcXHZpdGUtdnVlLTIwMjJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1dFQi92aXRlLXZ1ZS0yMDIyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCB7IHBsdWdpbiBhcyBwaWNtIH0gZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1wdWctd2l0aC1jc3MtbW9kdWxlc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgcXVhc2FyLCB0cmFuc2Zvcm1Bc3NldFVybHMgfSBmcm9tIFwiQHF1YXNhci92aXRlLXBsdWdpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Nzczoge1xyXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgXHJcbiAgICAgICAgICAgICAgQGltcG9ydCBcIi4vc3JjL3Njc3MvbWFpbi5zY3NzXCI7XHJcbiAgICAgICAgICAgIGAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcGljbSgpLFxyXG4gICAgdnVlKCksXHJcbiAgICBxdWFzYXIoe1xyXG4gICAgICAvLyBzYXNzVmFyaWFibGVzOiBcIi4vbm9kZV9tb2R1bGVzL0BxdWFzYXIvZXh0cmFzL1wiLFxyXG4gICAgfSksXHJcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XHJcbiAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIFwic3JjL2Fzc2V0cy9zdmdcIildLFxyXG4gICAgICBzeW1ib2xJZDogXCJpY29uLVtkaXJdLVtuYW1lXVwiLFxyXG4gICAgICAvLyBpbmplY3QgPyA6ICdib2R5LWxhc3QnIHwgJ2JvZHktZmlyc3QnLFxyXG4gICAgICBjdXN0b21Eb21JZDogXCJfX3N2Z19faWNvbnNfX2RvbV9fXCIsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1AsU0FBUyxvQkFBb0I7QUFDalIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsVUFBVSxZQUFZO0FBQy9CLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sVUFBVTtBQUNqQixTQUFTLFFBQVEsMEJBQTBCO0FBTDNDLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxNQUdsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxLQUFLO0FBQUEsSUFDTCxJQUFJO0FBQUEsSUFDSixPQUFPLENBRVAsQ0FBQztBQUFBLElBQ0QscUJBQXFCO0FBQUEsTUFDbkIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztBQUFBLE1BQ3hELFVBQVU7QUFBQSxNQUVWLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
