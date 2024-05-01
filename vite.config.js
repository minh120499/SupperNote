import { defineConfig } from 'vite';

export default defineConfig({
  // Cấu hình cho máy chủ phát triển
  server: {
    port: 3000,
  },
  // Cấu hình cho quá trình xây dựng ứng dụng
  build: {
    outDir: 'dist',
  },
});
