import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";

export default defineConfig({
  plugins: [
    solidPlugin(),
    solidSvg({
      svgo: {
        svgoConfig: { removeViewBox: false },
      },
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  build: {
    target: "esnext",
  },
});
