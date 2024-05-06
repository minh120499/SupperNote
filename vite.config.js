import { defineConfig } from 'vite';
import * as path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Cấu hình cho máy chủ phát triển
  server: {
    port: 3000,
  },
  // Cấu hình cho quá trình xây dựng ứng dụng
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
  resolve: {
    alias: {
      app: path.resolve(__dirname, "src"),
    },
  },
});
