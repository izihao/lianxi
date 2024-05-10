import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueSetupExtend from "vite-plugin-vue-setup-extend";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [vue(), vueJsx(), vueSetupExtend()],
    base: "./",
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      // 端口号
      port: 8888,
      // 自动打开浏览器
      open: true,
      // 主机名
      host: "localhost",
      // 解决跨域
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: "https://mock.apifox.com/m1/4458460-0-default",
          changeOrigin: true,
          // rewrite: (path) => path.replace(/`^${env.VITE_APP_BASE_API}`/, ""),
          rewrite: (path) =>
            path.replace(new RegExp("^" + `${env.VITE_APP_BASE_API}`), ""),
        },
        // "/dev-api": {
        //   target: "http://localhost:7777",
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/dev-api/, ""),
        // },
      },
    },
  };
});
