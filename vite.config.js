import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          animations: ["framer-motion"],
          charts: ["chart.js", "react-chartjs-2", "recharts"],
          icons: ["react-icons", "lucide-react"],
        },
      },
    },
    // Enable source maps for production debugging
    sourcemap: false,
    // Minimize asset size with esbuild (faster and built-in)
    minify: "esbuild",
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
  server: {
    // Enable HTTP/2 for development
    https: false,
    // Optimize HMR
    hmr: {
      overlay: false,
    },
  },
});
