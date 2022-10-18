import {defineConfig} from 'vite';
import viteCompression from 'vite-plugin-compression';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 1024,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // legacy({
    //   targets: ["defaults", "not IE 11"],
    //   // additionalLegacyPolyfills: ['regenerator-runtime/runtime'] //IE11
    // }),
  ],
  // 配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        /*
    引入var.scss全局预定义变量，
    如果引入多个文件，
    可以使用
    '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
    这种格式
     */
        // additionalData: '@import "@/assets/style/base.scss";',
        additionalData: '@import "./src/assets/style/index.scss";',
      },
    },
  },
  //启动服务配置
  server: {
    host: "0.0.0.0",
    port: 8081,
    open: false,
    https: false,
    proxy: {
      "/api": {
        target: "http://192.168.31.30:3000", // 所要代理的目标地址
        rewrite: (path) => path.replace(/^\/api/, "/api"), // 重写传过来的path路径，比如 `/api/index/1?id=10&name=zs`（注意:path路径最前面有斜杠（/），因此，正则匹配的时候不要忘了是斜杠（/）开头的；选项的 key 也是斜杠（/）开头的）
        changeOrigin: true, // true/false, Default: false - changes the origin of the host header to the target URL
      },
    },
  },
  // 生产环境打包配置
  //去除 console debugger
  base: "/blog/dist/",
  build: {
    sourcemap: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // antd: ["antd"],
          // react: ["react", "react-dom"],
          // 'antd-mobile': ["antd-mobile"],
          // 'react-syntax-highlighter':['react-syntax-highlighter']
        },
      },
      // input: {
      //   admin: path.resolve(__dirname, 'src/index.html'),
      //   page: path.resolve(__dirname, 'src/page/index.html'),
      //   index: path.resolve(__dirname, 'src/index/index.html'),
      // },
      // output: {
      //   chunkFileNames: 'static/js/[name]-[hash].js',
      //   entryFileNames: 'static/js/[name]-[hash].js',
      //   assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      // }
    },
  },
});
