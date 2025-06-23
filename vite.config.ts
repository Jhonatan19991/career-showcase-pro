import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [react()];
  
  // Only add componentTagger in development mode and if the package is available
  if (mode === "development") {
    try {
      const { componentTagger } = require("lovable-tagger");
      plugins.push(componentTagger());
    } catch (error) {
      // If lovable-tagger is not available, continue without it
      console.log("lovable-tagger not available, skipping...");
    }
  }

  return {
    base: mode === "production" ? "/career-showcase-pro/" : "/", // 👈 Desarrollo local vs GitHub Pages
    server: {
      host: true, // permite acceso desde LAN o IPv6
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // alias para importar como @/components...
      },
    },
  };
});
