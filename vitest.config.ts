import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/layouts": path.resolve(__dirname, "layouts"),
      "@/components": path.resolve(__dirname, "components"),
      "@/pages": path.resolve(__dirname, "pages"),
      "@/src": path.resolve(__dirname, "src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
  envPrefix: "NEXT_PUBLIC_",
});
