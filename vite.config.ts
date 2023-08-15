import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({ exportAsDefault: true }),
    react(),
    tsconfigPaths({ parseNative: true }),
    checker({
      typescript: true,
      overlay: false,
    }),
  ],
  resolve: {
    alias: {
      app: path.resolve(__dirname, "./src/app"),
      entities: path.resolve(__dirname, "./src/entities"),
      features: path.resolve(__dirname, "./src/features"),
      pages: path.resolve(__dirname, "./src/pages"),
      widgets: path.resolve(__dirname, "./src/widgets"),
      shared: path.resolve(__dirname, "./src/shared"),
    },
  },
});
