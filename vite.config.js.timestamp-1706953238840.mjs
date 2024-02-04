// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { plugin as picm } from "vite-plugin-vue-pug-with-css-modules";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXRUJcXFxcdml0ZS12dWUtMjAyMlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcV0VCXFxcXHZpdGUtdnVlLTIwMjJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1dFQi92aXRlLXZ1ZS0yMDIyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCB7IHBsdWdpbiBhcyBwaWNtIH0gZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1wdWctd2l0aC1jc3MtbW9kdWxlc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYFxyXG4gICAgICAgICAgICAgIEBpbXBvcnQgXCIuL3NyYy9zY3NzL21haW4uc2Nzc1wiO1xyXG4gICAgICAgICAgICBgLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHBpY20oKSxcclxuICAgIHZ1ZSgpLFxyXG4gICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xyXG4gICAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBcInNyYy9hc3NldHMvc3ZnXCIpXSxcclxuICAgICAgc3ltYm9sSWQ6IFwiaWNvbi1bZGlyXS1bbmFtZV1cIixcclxuICAgICAgLy8gaW5qZWN0ID8gOiAnYm9keS1sYXN0JyB8ICdib2R5LWZpcnN0JyxcclxuICAgICAgY3VzdG9tRG9tSWQ6IFwiX19zdmdfX2ljb25zX19kb21fX1wiLFxyXG4gICAgfSksXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9QLFNBQVMsb0JBQW9CO0FBQ2pSLE9BQU8sU0FBUztBQUNoQixTQUFTLFVBQVUsWUFBWTtBQUMvQixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLFVBQVU7QUFKakIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLE1BR2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxJQUNMLElBQUk7QUFBQSxJQUNKLHFCQUFxQjtBQUFBLE1BQ25CLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7QUFBQSxNQUN4RCxVQUFVO0FBQUEsTUFFVixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
