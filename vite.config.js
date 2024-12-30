import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Direktori keluaran
    assetsDir: 'assets', // Tempat menyimpan file CSS, JS, dan lainnya
    rollupOptions: {
      input: './index.html', // File HTML utama
    },
  },
});
