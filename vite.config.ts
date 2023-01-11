import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createViteVanillaExtractSprinklesExtractor } from "@box-extractor/vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig((_env) => ({
    optimizeDeps: {
        include: [
            "@vanilla-extract/css", // needed for ahocorasick when importing @box-extractor/vanilla-theme/css from node_modules
        ],
    },
    plugins: [
        createViteVanillaExtractSprinklesExtractor({
            components: ["Box"],
            functions: ["themeSprinkles", "externalSprinkles", "minimalSprinkles"],
        }),
        react(),
    ],
}));
