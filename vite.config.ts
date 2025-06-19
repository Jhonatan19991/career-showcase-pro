import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/career-showcase-pro/", // 👈 MUY IMPORTANTE para GitHub Pages

  plugins: [
    react(),
    ...(mode === "development" ? [componentTagger()] : []),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // alias para importar como @/components...
    },
  },

  server: {
    host: true, // permite acceso desde LAN o IPv6
    port: 8080,
  },
}));
